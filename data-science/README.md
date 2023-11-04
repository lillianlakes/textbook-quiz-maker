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
tokenizer = AutoTokenizer.from_pretrained("t5_tokenizer", token = ENTER_HUGGINGFACE_AUTH_TOKEN)

# Load the model
model = AutoModelForSeq2SeqLM.from_pretrained("t5_trained_model", token = ENTER_HUGGINGFACE_AUTH_TOKEN)

# Generate a question
input_text = "Provide a sample input text."
input_ids = tokenizer.encode(input_text, return_tensors="pt", padding=True, max_length=512, truncation=True)

# Generate question
question_ids = model.generate(input_ids, max_length=32, num_return_sequences=1, num_beams=4)

# Decode the generated question
generated_question = tokenizer.decode(question_ids[0], skip_special_tokens=True)
print(f"Generated {generated_question}")
```

## Model Usage

Check out the deployed model [here](https://huggingface.co/spaces/lillianlakes/book-buddy-question-generator).
![Web Application for Book Buddy - ADHD Friendly E-Textbook Quiz Maker](/data-science/assets/web_application.png)

## Directory Structure

| Directory Structure                    |
|----------------------------------------|
| textbook-quiz-maker/                   |
| ├── .streamlit/                        |
| │   └── secrets.toml                   |
| │                                      |
| ├── assets/                            |
| │   ├── logo.png                       |
| │   ├── style.py                       |
| │   └── web_application.png            |
| │                                      |
| ├── data/                              |
| │   ├── train.csv                      |
| │   └── valid.csv                      |
| │                                      |
| ├── logs/                              |
| │   └── your_project.log               |
| │                                      |
| ├── scripts/                           |
| │   ├── custom_dataset.py              |
| │   ├── t5_tuner.py                    |
| │   └── preprocessing.py               |
| |                                      |
| ├── t5_tokenizer/                      |
| │   ├── special_tokens_map.json        |
| │   ├── tokenizer.json                 |
| │   └── tokenizer_config.json          |
| |                                      |
| ├── t5_trained_model/                  |
| │   ├── config.json                    |
| │   ├── generation_config.json         |
| │   └── pytorch_model.bin              |
| │                                      |
| ├── .gitattributes                     |
| ├── BookBuddyApp.py                    |
| ├── README.md                          |
| ├── logging_config.py                  |
| ├── main.py                            |
| ├── requirements.txt                   |
| └── sample.py                          |
