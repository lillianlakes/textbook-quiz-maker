import logging
from logging_config import *  # Import logging settings from logging_config.py
import torch
from torch.utils.data import DataLoader
from pytorch_lightning.callbacks import EarlyStopping
from transformers import AutoTokenizer, T5ForConditionalGeneration
import optim

class T5Tuner(pl.LightningModule):
    def __init__(self, batchsize, t5model, t5tokenizer, early_stopping_patience=5, early_stopping_metric='val_loss'):
        super(T5Tuner, self).__init__()
        self.batch_size = batchsize
        self.model = t5model
        self.tokenizer = t5tokenizer
        self.early_stopping_patience = early_stopping_patience
        self.early_stopping_metric = early_stopping_metric

    def configure_callbacks(self):
        early_stopping_callback = EarlyStopping(
            monitor=self.early_stopping_metric,
            patience=self.early_stopping_patience,
            verbose=True,
            mode='min'  # 'min' because we want to minimize the validation loss
        )
        return [early_stopping_callback]

    def forward(self, input_ids, attention_mask=None, decoder_attention_mask=None, lm_labels=None):
        outputs = self.model(
            input_ids=input_ids,
            attention_mask=attention_mask,
            decoder_attention_mask=decoder_attention_mask,
            labels=lm_labels,
        )
        return outputs

    def training_step(self, batch, batch_idx):
        outputs = self.forward(
            input_ids=batch["source_ids"],
            attention_mask=batch["source_mask"],
            decoder_attention_mask=batch['target_mask'],
            lm_labels=batch['labels']
        )
        loss = outputs[0]
        self.log('train_loss', loss)
        return loss

    def validation_step(self, batch, batch_idx):
        outputs = self.forward(
            input_ids=batch["source_ids"],
            attention_mask=batch["source_mask"],
            decoder_attention_mask=batch['target_mask'],
            lm_labels=batch['labels']
        )
        loss = outputs[0]
        self.log("val_loss", loss)
        return loss

    def train_dataloader(self):
        return DataLoader(custom_train_dataset, batch_size=self.batch_size, num_workers=4)

    def val_dataloader(self):
        return DataLoader(custom_validation_dataset, batch_size=self.batch_size, num_workers=4)

    def configure_optimizers(self):
        optimizer = AdamW(self.parameters(), lr=3e-4, eps=1e-8)
        return optimizer
