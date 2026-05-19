import re


def clean_text(text):

    # remove line breaks
    text = re.sub(r"\n", " ", text)

    # remove multiple spaces
    text = re.sub(r"\s+", " ", text)

    # remove broken hyphenation
    text = re.sub(r"-\s+", "", text)

    return text.strip()