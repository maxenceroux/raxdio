import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import io from "socket.io-client";
import { ReactComponent as Cancel } from "../assets/cancel.svg";

const Chat = ({ isVisible, handleCancelClick }) => {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState(
    `guest${Math.floor(Math.random() * 100000)}`
  );
  const [inputValue, setInputValue] = useState("");
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const scrollableRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleEditUsernameClick = () => {
    setIsEditingUsername(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setInputValue(event.target.value);
      setIsEditingUsername(false);

      setUsername(event.target.value);
    }
  };
  const handleMessageKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const input = e.target.value;
      const message = input.trim();
      socketRef.current.emit("set username", username);
      if (message) {
        socketRef.current.emit("chat message", message);
        e.target.value = "";
      }
    }
  };

  const socketRef = useRef();

  useLayoutEffect(() => {
    const { current } = scrollableRef;
    current.scrollTop = current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    socketRef.current = io(process.env.REACT_APP_CHAT_API_URL, {
      path: "/socket.io",
    });

    socketRef.current.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
    socketRef.current.emit("set username", username);

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.message;
    const message = input.value.trim();
    socketRef.current.emit("set username", username);
    if (message) {
      socketRef.current.emit("chat message", message);
      input.value = "";
    }
  };

  return (
    <div
      className="chat-text"
      style={{ display: isVisible ? "block" : "none" }}
    >
      <Cancel id="close-chat" onClick={handleCancelClick} />
      <ul ref={scrollableRef} className="messages">
        {messages.map((msg, index) => (
          <li className="message" key={index}>
            <div className="message-metadata">
              <span className="username">{msg.username}</span>
              <span className="date">{msg.date}</span>
            </div>
            <span className="content-msg">{msg.message}</span>
          </li>
        ))}
      </ul>
      <div className="input-container">
        <form className="tell-us" onSubmit={handleSubmit}>
          <input
            type="text"
            name="message"
            placeholder="What's up?"
            className="input-text"
            autoComplete="off"
            onChange={handleInputChange}
            onKeyDown={handleMessageKeyDown}
          />
        </form>
        <div className="user-info">
          <div>{username} </div>
          {!isEditingUsername && (
            <a id="edit-username" onClick={handleEditUsernameClick}>
              {" "}
              (edit)
            </a>
          )}
          {isEditingUsername && (
            <input
              className="edit-username"
              type="text"
              placeholder="Your super cool username"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onBlur={() => setIsEditingUsername(false)}
              autoFocus
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
