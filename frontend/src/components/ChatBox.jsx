import { useState } from "react"

function ChatBox() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])

  const handleSend = () => {
    if (!message.trim()) return

    const newMessage = {
      id: Date.now(),
      text: message,
      sender: "user",
    }

    setMessages((prev) => [...prev, newMessage])
    setMessage("")
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="chat-container">

      <div className="chat-messages">

        {messages.length === 0 ? (
          <div className="chat-empty">
            <div className="chat-empty-icon">💬</div>

            <h2>Ask about your PDF</h2>

            <p>
              Ask a question and get answers based on your document.
            </p>
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`message ${msg.sender}`}
            >
              <div className="message-avatar">
                👤
              </div>

              <div className="message-content">
                {msg.text}
              </div>
            </div>
          ))
        )}

      </div>

      <div className="chat-input-area">

        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask something about your PDF..."
          rows="1"
        />

        <button
          className="send-button"
          onClick={handleSend}
        >
          Send
        </button>

      </div>

    </div>
  )
}

export default ChatBox