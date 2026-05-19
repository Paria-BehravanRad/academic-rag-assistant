from ingestion.pdf_loader import load_pdf
from utils.text_cleaner import clean_text
from ingestion.chunker import create_chunks
from embeddings.embedder import create_embeddings


# =====================
# LOAD PDF
# =====================

text = load_pdf(
    "data/papers/first.pdf"
)

print("PDF loaded.")


# =====================
# CLEAN TEXT
# =====================

cleaned_text = clean_text(text)

print("Text cleaned.")


# =====================
# CHUNKING
# =====================

chunks = create_chunks(cleaned_text)

print(f"Number of chunks: {len(chunks)}")


# =====================
# EMBEDDINGS
# =====================

embeddings = create_embeddings(chunks)

print("Embeddings created.")


# =====================
# TEST
# =====================

print("\nFirst chunk:\n")
print(chunks[0])

print("\nEmbedding dimension:")
print(len(embeddings[0]))