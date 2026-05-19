from sentence_transformers import SentenceTransformer


# load model once
model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)


def create_embeddings(chunks):

    embeddings = model.encode(
        [
            f"Represent this document for retrieval: {chunk}"
            for chunk in chunks
        ],
        normalize_embeddings=True,
        show_progress_bar=True
    )

    return embeddings