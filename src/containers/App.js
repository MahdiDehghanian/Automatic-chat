import React, { useState } from 'react'
import MessageList from '../components/MessageList/MessageList'
import MessageForm from '../components/MessageForm/MessageForm'
import './App.css'

function App() {

  const [messages, setMessages] = useState([]);

  const sendMessage = (e) => {
    if (e.trim() !== "") {

      setMessages(messages =>[...messages, { me: true, body: e.trim() } ] )

      fetch(`http://localhost:3001/message/${e.trim()}`)
        .then((response) => response.json())
        .then((data) => {
        setMessages(messages => [...messages, { me: false, body: data.message  } ]);
        })
        .catch((error) => { })
        .then(() => {
        })
    }else {
    }

  };


  return <div className="App">
    <MessageList messages={messages} />
      <MessageForm onMessageSend={sendMessage} />
  </div>
}

export default App
