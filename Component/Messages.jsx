import React from "react";
import Message from "./Message";
const Messages = ({ messageList }) => {
  return (
    <div className="messages">
      {messageList.map((msg) => (
        <Message key={msg.id} text={msg.text} timestamp={msg.timestamp} />
      ))}
      {/* <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message /> */}
    </div>
  );
};

export default Messages;
