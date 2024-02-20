import React, { useState, useEffect } from "react";
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import Messages from "./Messages";
import Input from "./Input";
import data from "./data/data";
import dataUser from "./data/data";

const inputIcon = [IoCall, FaVideo, IoMdMore];

export const Chat = ({ userId, userInfo }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const dataUser = data.find((user) => user.id === userId);
  }, [userId]);

  useEffect(() => {
    const userMessages = fetchMessagesForUser(userId);
    setMessages(userMessages);
  }, [userId]);

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
            <img src={userInfo.img} alt="profile-default" />
            <h4>{userInfo.name}</h4>
          </div>
        </div>
        <div className="chatHeaderRight">
          {inputIcon.map((Icon, index) => (
            <button key={index}>
              <Icon />
            </button>
          ))}
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

const fetchMessagesForUser = (userId) => {
  // Placeholder function to fetch or filter messages
  return []; // Return filtered messages for the user
};
