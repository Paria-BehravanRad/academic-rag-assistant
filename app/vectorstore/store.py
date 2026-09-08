from app.langchain_chroma import Chroma
from app.langchain_huggingface import HuggingFaceEmbeddings
class VectorStore:
    def __init__(self, persist_directory="vectordb"):
        self.embeddings = HuggingFaceEmbeddings(
            model_name="BAAI/bge-small-en-v1.5"
        )

        self.db = Chroma(
            persist_directory=persist_directory,
            embedding_function=self.embeddings
        )

    # ذخیره chunk ها

    def add_documents(self, chunks):
        self.db.add_texts(chunks)


    # سرچ
    def search(self, query, k=5):
        return self.db.similarity_search(query, k=k)
    