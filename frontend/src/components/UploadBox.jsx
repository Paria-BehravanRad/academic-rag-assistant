import { useRef } from "react"

function UploadBox({ onFileSelect }) {
  const fileInputRef = useRef(null)

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]

    if (!selectedFile) return

    if (selectedFile.type !== "application/pdf") {
      alert("Please select a PDF file.")
      return
    }

    if (selectedFile.size > 20 * 1024 * 1024) {
      alert("File size must be less than 20 MB.")
      return
    }

    onFileSelect(selectedFile)
  }

  const handleBrowse = () => {
    fileInputRef.current.click()
  }

  return (
    <div className="upload-box">

      <input
        ref={fileInputRef}
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        hidden
      />

      <div className="upload-box-icon">
        ↑
      </div>

      <h3>Drop your PDF here</h3>

      <p>
        or click to browse from your computer
      </p>

      <button
        className="browse-button"
        onClick={handleBrowse}
      >
        Browse PDF
      </button>

    </div>
  )
}

export default UploadBox