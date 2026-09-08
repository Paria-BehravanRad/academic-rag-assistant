from app.ingestion.pdf_loader import load_pdf
from app.utils.text_cleaner import clean_text
from app.ingestion.chunker import create_chunks
from app.embeddings.embedder import create_embeddings
from app.vectordb.store import VectorStore
from app.retrieval.retriever import Retriever


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

#embeddings = create_embeddings(chunks)

#print("Embeddings created.")

# =====================
# EMBEDDINGS + VECTORSTORE
# =====================

vs = VectorStore()

vs.add_documents(chunks)

print("Chunks stored in Vector DB.")


# =====================
# RETRIEVAL
# =====================

retriever = Retriever()

query = "What is self attention?"

results = retriever.search(query)

print("\nTop Results:\n")

for i, result in enumerate(results):

    print(f"\nResult {i+1}:\n")

    print(result.page_content)