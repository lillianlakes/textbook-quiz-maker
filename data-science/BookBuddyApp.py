import streamlit as st
import logging
from transformers import AutoTokenizer, T5ForConditionalGeneration
from scripts.preprocessing import TextPreprocessor
from assets.style import set_custom_css

class BookBuddyApp:
    def __init__(self):
        set_custom_css()
        self.max_length = 512
        self.setup_logging()
        self.load_models()

    def setup_logging(self):
        self.logger = logging.getLogger(__name__)
        self.logger.setLevel(logging.DEBUG)

        file_handler = logging.FileHandler('logs/your_project.log.txt')
        formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
        file_handler.setFormatter(formatter)

        self.logger.addHandler(file_handler)

    def load_models(self):
        self.trained_model_path = 't5_trained_model'
        self.trained_tokenizer_path = 't5_tokenizer'
        self.model = T5ForConditionalGeneration.from_pretrained(self.trained_model_path, token = st.secrets["huggingface_token"])
        self.tokenizer = AutoTokenizer.from_pretrained(self.trained_tokenizer_path, token = st.secrets["huggingface_token"])
        self.text_preprocessor = TextPreprocessor()

    def generate_question(self, sentence):
        cleaned_text = self.text_preprocessor.remove_figure_references(sentence)
        input_text = f"context: {cleaned_text}"
        input_ids = self.tokenizer.encode(input_text, return_tensors="pt", padding=True, max_length=self.max_length, truncation=True)
        question_ids = self.model.generate(input_ids, max_length=32, num_return_sequences=1, num_beams=4)
        generated_question = self.tokenizer.decode(question_ids[0], skip_special_tokens=True)
        return generated_question

    def run(self):
        logo_path = 'assets/logo.png'
        col1, col2 = st.columns([1, 4])

        with col1:
            st.image(logo_path, width=150)
        
        with col2:
            st.title("Book Buddy - ADHD Friendly E-Textbook Quiz Maker")

        st.write(
            "Welcome to Book Buddy - an innovative tool designed to assist in generating questions from provided text, "
            "catering to the specific needs of ADHD individuals. This application employs a cutting-edge T5 model, "
            "fine-tuned for question generation tasks. This project is one of the finalists for "
            "Women Who Code Hackathon for Social Good 2023!"
        )

        st.subheader("Model Information")
        st.write(
            "The core of this application lies in a T5 model, specifically fine-tuned for the task of generating questions "
            "from text inputs. T5 stands for 'Text-to-Text Transfer Transformer,' a powerful language model by Google that "
            "excels in various natural language processing tasks."
        )

        st.write("Enter text to generate questions:")
        sample_sentence = st.text_area("Enter the text:")

        if st.button("Generate Question"):
            if sample_sentence:
                generated_question = self.generate_question(sample_sentence)
                st.write(f"Generated {generated_question}")
            else:
                st.write("Please enter some text.")

        if len(sample_sentence) > self.max_length:
            st.warning(f"Maximum text length allowed is {self.max_length}. Please consider reducing the length of your text.")

if __name__ == "__main__":
    app = BookBuddyApp()
    app.run()
