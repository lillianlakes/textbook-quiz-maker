# Book Buddy - ADHD Friendly Interactive E-Textbooks Quiz Maker

---
language:
- en
library_name: transformers
pipeline_tag: text2text-generation
license: mit
datasets:
- squad
---
# Book Buddy - Question Generator

This fine-tuned model was generated to help students study. 
By submitting their texts, the model will generate a question to help them study.

## Model Details

- **Model Architecture**: T5 
- **Tokenizer Used**: 
- **Language**: English 
- **Task**: Question Generation 

## Model Usage

### How to Use

Provide instructions on how to use your model in a clear and concise manner.

```python
# Example code for using the model
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

# Load the tokenizer
tokenizer = AutoTokenizer.from_pretrained("t5_tokenizer", auth_token = ENTER_HUGGINGFACE_AUTH_TOKEN)

# Load the model
model = AutoModelForSeq2SeqLM.from_pretrained("t5_trained_model", auth_token = ENTER_HUGGINGFACE_AUTH_TOKEN)

# Generate a question
input_text = "Provide a sample input text."
input_ids = tokenizer.encode(input_text, return_tensors="pt", padding=True, max_length=512, truncation=True)

# Generate question
question_ids = model.generate(input_ids, max_length=32, num_return_sequences=1, num_beams=4)

# Decode the generated question
generated_question = tokenizer.decode(question_ids[0], skip_special_tokens=True)
print(f"Generated {generated_question}")
```

## Directory Structure

|----------------------------------------|
| textbook-quiz-maker/                   |
| ├── data science/                     |
| │   ├── main.py                       |
| │   ├── sample.py                     |
| │   ├── README.md                     |
| │   ├── requirements.txt              |
| │   ├── logging_config.py              |
| │                                    |
| ├── data/                             |
| │   ├── train.csv                     |
| │   ├── valid.csv                     |
| │                                    |
| |                                    |
| ├── t5_trained_model/                |
| ├── t5_tokenizer/                    |
| │                                    |
| ├── logs/                             |
| │   ├── your_project.log               |
| │                                    |
| ├── scripts/                          |
|     ├── custom_dataset.py             |
|     ├── t5_tuner.py                   |
|     ├── preprocessing.py              |
