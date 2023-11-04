import os
import torch
import pandas as pd
from transformers import AutoTokenizer, T5ForConditionalGeneration
from scripts.CustomQuestionGenerationDataset import CustomQuestionGenerationDataset
from scripts.T5Tuner import T5Tuner
import pytorch_lightning as pl
from scripts.preprocessing import TextPreprocessor
import streamlit as st
from huggingface_hub import login

huggingface_token = st.secrets['huggingface_token']
login(huggingface_token)


if __name__ == '__main':
    # Initialize the text preprocessor
    text_preprocessor = TextPreprocessor()

    # Define the batch size and other hyperparameters
    batch_size = 4
    max_epochs = 100
    accelerator = 'cuda' if torch.cuda.is_available() else 'cpu'

    # Initialize the model and trainer
    t5_tokenizer = AutoTokenizer.from_pretrained('t5-small', token = huggingface_token)
    t5_model = T5ForConditionalGeneration.from_pretrained('t5-small', token = huggingface_token)
    train_data_frame = pd.read_csv('data/train.csv')
    validation_data_frame = pd.read_csv('data/valid.csv')

    # Clean the text in your data frames
    train_data_frame['text_column'] = train_data_frame['text_column'].apply(text_preprocessor.remove_figure_references)
    train_data_frame['text_column'] = train_data_frame['text_column'].apply(text_preprocessor.clean_text)

    validation_data_frame['text_column'] = validation_data_frame['text_column'].apply(text_preprocessor.remove_figure_references)
    validation_data_frame['text_column'] = validation_data_frame['text_column'].apply(text_preprocessor.clean_text)

    custom_train_dataset = CustomQuestionGenerationDataset(t5_tokenizer, train_data_frame)
    custom_validation_dataset = CustomQuestionGenerationDataset(t5_tokenizer, validation_data_frame)

    model = T5Tuner(batch_size, t5_model, t5_tokenizer, early_stopping_patience=5, early_stopping_metric='val_loss')
    trainer = pl.Trainer(max_epochs=max_epochs, accelerator=accelerator, callbacks=model.configure_callbacks())

    # Start the fine-tuning process
    trainer.fit(model)

    # Save fine-tuned model and tokenizer
    model.model.save_pretrained('t5_trained_model')  # Save the fine-tuned model
    t5_tokenizer.save_pretrained('t5_tokenizer')  # Save the tokenizer

    # Check if the directories exist, and create them if necessary
    if not os.path.exists('t5_trained_model'):
        os.mkdir('t5_trained_model')

    if not os.path.exists('t5_tokenizer'):
        os.mkdir('t5_tokenizer')
