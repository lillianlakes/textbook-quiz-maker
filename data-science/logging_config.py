# logging_config.py
import logging

logging.basicConfig(
    filename='your_project.log',
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] - %(message)s'
)