import React, { useState } from 'react'
import './MessageForm.css'

function MessageForm({ onMessageSend }) {

  const [input , setInput] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    onMessageSend(input);
    setInput("");
  }

  return (
    <form
      className="MessageForm"
      onSubmit={handleFormSubmit}
      data-testid="submit-message"
    >
      <div className="input-container">
        <input
         autoFocus
          data-testid="input-message"
          type="text"
          placeholder="پیام خود را اینجا بنویسید..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button type="submit">ارسال</button>
      </div>
    </form>
  )
}

export default MessageForm
