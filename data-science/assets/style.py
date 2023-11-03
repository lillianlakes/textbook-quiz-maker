import streamlit as st
# Define a function to set the font and font-size using CSS
def set_custom_css():
    st.markdown(
        """
        <style>
        /* Set the font for the entire app to Open Sans */
        body {
            font-family: 'Open Sans', sans-serif;
            background-color: #e1e8f0; /* Adjust background color here */
        }

        /* Increase font size for regular text */
        p {
            font-size: 18px;
        }

        /* Increase font size for titles */
        .css-1ix49od {
            font-size: 28px;
        }

        /* Increase font size for specific text (e.g., "Enter the text:") */
        .stTextInput label {
            font-size: 18px;
        }
        </style>
        """,
        unsafe_allow_html=True,
    )