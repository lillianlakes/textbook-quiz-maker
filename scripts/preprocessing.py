import re
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

nltk.download('punkt')
nltk.download('stopwords')

class TextPreprocessor:
    def __init__(self):
        # Get the list of English stopwords
        self.stop_words = set(stopwords.words('english'))

    def remove_figure_references(self, text):
        # Remove references like "(Figure X.Y)" or "(Figure X.Y.Z)" and "see Figure X.Y" or "see Figure X.Y.Z"
        text = re.sub(r'\(Figure \d+(\.\d+)+\)', '', text)  # Remove (Figure X.Y or X.Y.Z)
        text = re.sub(r'see Figure \d+(\.\d+)+', '', text)  # Remove "see Figure X.Y or X.Y.Z"
        return text

    def clean_text(self, text):
        # Text cleaning: Remove special characters, symbols, etc. (you can extend this as needed)
        words = word_tokenize(text)
        cleaned_words = [word.lower() for word in words if word.lower() not in self.stop_words]  # Tokenization and stop word removal
        cleaned_text = " ".join(cleaned_words)
        return cleaned_text