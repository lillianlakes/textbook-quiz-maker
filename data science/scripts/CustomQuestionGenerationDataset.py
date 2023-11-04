import logging
from logging_config import *  # Import logging settings from logging_config.py
from torch.utils.data import Dataset

class CustomQuestionGenerationDataset(Dataset):
    def __init__(self, tokenizer, data_frame, max_len_inp=512, max_len_out=96):
        self.data = data_frame
        self.max_len_input = max_len_inp
        self.max_len_output = max_len_out
        self.tokenizer = tokenizer
        self.inputs = []
        self.targets = []
        self._build()

    def __len__(self):
        return len(self.inputs)

    def __getitem__(self, index):
        source_ids = self.inputs[index]["input_ids"].squeeze()
        target_ids = self.targets[index]["input_ids"].squeeze()
        src_mask = self.inputs[index]["attention_mask"].squeeze()
        target_mask = self.targets[index]["attention_mask"].squeeze()
        labels = target_ids.clone()
        labels[labels == 0] = -100

        return {
            "source_ids": source_ids,
            "source_mask": src_mask,
            "target_ids": target_ids,
            "target_mask": target_mask,
            "labels": labels
        }

    def _build(self):
        for _, row in self.data.iterrows():
            passage, question = row["passage"], row["question"]
            input_ = f"context: {passage}"
            target = f"question: {str(question)}"

            # Tokenize inputs
            tokenized_inputs = self.tokenizer.batch_encode_plus(
                [input_], max_length=self.max_len_input, padding='max_length',
                return_tensors="pt"  # PyTorch tensors
            )
            # Tokenize targets
            tokenized_targets = self.tokenizer.batch_encode_plus(
                [target], max_length=self.max_len_output, padding='max_length', return_tensors="pt"
            )

            self.inputs.append(tokenized_inputs)
            self.targets.append(tokenized_targets)
