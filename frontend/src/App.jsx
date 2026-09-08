import { useState } from "react"
import "./App.css"

import UploadBox from "./components/UploadBox"
import ChatBox from "./components/ChatBox"

function App() {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileSelect = (file) => {
    setSelectedFile(file)
  }

  return (
    <div className="app">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="logo">
          <span className="logo-icon">◈</span>
          <span>DocuChat</span>
        </div>

        <button className="new-chat">
          + New Chat
        </button>

        <div className="documents-section">

          <h3>Documents</h3>

          {selectedFile ? (
            <div className="document-item">
              <span>📄</span>
              <span>{selectedFile.name}</span>
            </div>
          ) : (
            <p className="no-document">
              No documents yet
            </p>
          )}

        </div>

        <button className="upload-button">
          + Upload PDF
        </button>

      </aside>

      {/* Main Content */}
      <main className="main-content">

        <header className="header">

          <div>
            <h1>PDF Assistant</h1>

            <p>
              {selectedFile
                ? `Chat with ${selectedFile.name}`
                : "Ask questions about your documents"}
            </p>
          </div>

        </header>

        {!selectedFile ? (

          /* Upload State */

          <section className="upload-section">

            <div className="upload-icon">
              📄
            </div>

            <h2>Upload your PDF</h2>

            <p>
              Upload a PDF document and start asking
              questions about it.
            </p>

            <UploadBox
              onFileSelect={handleFileSelect}
            />

            <span className="file-info">
              PDF files only · Maximum size 20 MB
            </span>

          </section>

        ) : (

          /* Chat State */

          <ChatBox />

        )}

      </main>

    </div>
  )
}

export default App