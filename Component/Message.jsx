import React from "react";

const Message = ({ text, timestamp }) => {
  const timeSent = timestamp.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://vcdn-vnexpress.vnecdn.net/2021/12/13/elon-musk-2-9936-1639406089.jpg"
          alt=""
        />
        <div className="messageTime">
          <p>{timeSent}</p>
        </div>
      </div>
      <div className="messageContent">
        <p>{text}</p>
        {/* <img src="https://www.w3schools.com/w3images/lights.jpg" alt="" /> */}
      </div>
    </div>
  );
};

export default Message;
