import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const ChatBot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    // Scroll to the bottom when messages change
    const chatContainer = document.getElementById("chat-window");
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [chatHistory]);

  const sendMessage = async () => {
    // Update chat history with user's message
    setUserInput("");

    try {
      // Send user message to the server
      const response = await axios.post("http://localhost:5000/api/chat", {
        user_message: userInput,
      });

      // Check if messages property exists and is an array
      const messages = response.data.messages || [];

      // Update chat history with bot's response
      setChatHistory((prevChatHistory) => [...prevChatHistory, ...messages]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <h1>SciAstra Chatbot</h1>
      <div
        id="chat-window"
        className="chatbot-container"
        style={{ height: "350px", overflowY: "auto" }}
      >
        {chatHistory.map((message, index) => (
            <>
          <span key={index} className={message.role}>
            {`${
              message.role.charAt(0).toUpperCase() + message.role.slice(1)
            }: ${message.text} `}
          </span>
          <hr/>
          </>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type your message..."
        className="input-container"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatBot;
