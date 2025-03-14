import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.scss";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const chatboxRef = useRef(null);
  const editableDivRef = useRef(null);

  // Define your API token from environment variables
  const API_TOKEN = process.env.REACT_APP_API_TOKEN;

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "User", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setInput(""); // Clear state
    if (editableDivRef.current) editableDivRef.current.textContent = ""; // Clear editable div content
    setIsStreaming(true);

    try {
      const response = await fetch("https://44.223.28.252/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_TOKEN}`, // Include secure token here
        },
        body: JSON.stringify({ question: input }),
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let botMessage = { sender: "Bot", text: "" };
      setMessages((prev) => [...prev, botMessage]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        botMessage.text += chunk;
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = botMessage; // Update the bot's last message
          return updated;
        });
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "Bot", text: "An error occurred. Please try again later." },
      ]);
    }

    setIsStreaming(false);
  };

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close 💬" : "Chat 💬"}
      </button>

      {isOpen && (
        <div className="chatbot">
          <div className="chatbox-header">
            <h3>Chatbot</h3>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>
          <div className="chatbox" ref={chatboxRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender === "User" ? "user-message" : "bot-message"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <div
              className="editable-div"
              contentEditable={!isStreaming}
              role="textbox"
              ref={editableDivRef} // Reference for clearing content
              onInput={(e) => setInput(e.currentTarget.textContent)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault(); // Prevent new line on Enter
                  handleSend();
                }
              }}
              data-placeholder="Type your message..."
            ></div>
            <div>
              <button onClick={handleSend} disabled={isStreaming}>
                {isStreaming ? "Typing..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
