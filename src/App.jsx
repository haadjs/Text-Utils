import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  function toUpper() {
    setText(text.toUpperCase());
  }

  function toLower() {
    setText(text.toLowerCase());
  }

  function clearText() {
    setText("");
  }

  function wordCount() {
    return text.trim().length > 0 ? text.trim().split(/\s+/).length : 0;
  }

  return (
    <div className="app-container">
      <div className="text-box">
        <h1 className="title">Text Utils</h1>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text here..."
          className="input-box"
        />
        <div className="button-group">
          <button onClick={toUpper} className="btn btn-blue">
            Uppercase
          </button>
          <button onClick={toLower} className="btn btn-green">
            Lowercase
          </button>
          <button onClick={clearText} className="btn btn-red">
            Clear
          </button>
        </div>
        <div className="preview-section">
          <p>
            <strong>Character Count:</strong>{" "}
            {text.length > 0 ? text.length : 0}
          </p>
          <p>
            <strong>Word Count:</strong> {wordCount()}
          </p>
          <p className="preview-text">
            <span>Preview:</span> {text || "Your text will appear here..."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
