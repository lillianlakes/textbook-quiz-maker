import torch
from transformers import AutoTokenizer, T5ForConditionalGeneration
from scripts.preprocessing import TextPreprocessor  # Import the TextPreprocessor class from your preprocessing script
from dotenv import load_dotenv
import os

load_dotenv()
huggingface_token = os.getenv("HUGGINGFACE_TOKEN")

# Load the previously fine-tuned models
trained_model_path = 't5_trained_model'  
trained_tokenizer_path = 't5_tokenizer' 

model = T5ForConditionalGeneration.from_pretrained(trained_model_path, auth_token = huggingface_token)
tokenizer = AutoTokenizer.from_pretrained(trained_tokenizer_path, auth_token = huggingface_token)

text_preprocessor = TextPreprocessor()  # Initialize the TextPreprocessor

def generate_question(sentence):
    cleaned_text = text_preprocessor.remove_figure_references(sentence)
    input_text = f"context: {cleaned_text}"
    input_ids = tokenizer.encode(input_text, return_tensors="pt", padding=True, max_length=512, truncation=True)

    # Generate question
    question_ids = model.generate(input_ids, max_length=32, num_return_sequences=1, num_beams=4)

    # Decode the generated question
    generated_question = tokenizer.decode(question_ids[0], skip_special_tokens=True)
    return generated_question

while True:
    sample_sentence = input("Enter the text (or type 'done' to exit): ")
    if sample_sentence.lower() == 'done':
        break

    generated_question = generate_question(sample_sentence)
    print(f"Generated {generated_question}")
    
