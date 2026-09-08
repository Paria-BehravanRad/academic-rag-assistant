from app.vectordb.store import VectorStore


class Retriever:

    def __init__(self):
        self.vector_store = VectorStore()

    def search(self, query, k=3):

        results = self.vector_store.db.similarity_search(
            query,
            k=k
        )

        return results