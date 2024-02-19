import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import Messages from "./Messages";
import Input from "./Input";

export const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (input) => {
    // Create a new message with a timestamp
    const newMessage = {
      id: Date.now(), // Unique identifier for the message
      text: input, // The text content of the message
      timestamp: new Date(), // Current date and time
    };
    setMessages([...messages, newMessage]);
  };
  return (
    <div className="chat">
      <div className="chatHeader">
        <div className="chatHeaderLeft">
          <div className="chatHeaderInfo">
            <img
              src="https://vcdn-vnexpress.vnecdn.net/2021/12/13/elon-musk-2-9936-1639406089.jpg"
              alt=""
            />
            <h4>Elon Musk</h4>
            <p>Active now</p>
          </div>
        </div>
        <div className="chatHeaderRight">
          <button>
            <IoCall />
          </button>
          <button>
            <FaVideo />
          </button>
          <button>
            <IoMdMore />
          </button>
        </div>
      </div>
      <div className="chatBody">
        <Messages messageList={messages} />
      </div>
      <div className="chatFooter">
        <Input onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};
