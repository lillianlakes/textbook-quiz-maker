import re
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

nltk.download('punkt')

class TextPreprocessor:
    def __init__(self):
        pass

    def remove_figure_references(self, text):
        # Remove references like "(Figure X.Y)" or "(Figure X.Y.Z)" and "see Figure X.Y" or "see Figure X.Y.Z"
        text = re.sub(r'\(Figure \d+(\.\d+)+\)', '', text)  # Remove (Figure X.Y or X.Y.Z)
        text = re.sub(r'see Figure \d+(\.\d+)+', '', text)  # Remove "see Figure X.Y or X.Y.Z"
        return text
