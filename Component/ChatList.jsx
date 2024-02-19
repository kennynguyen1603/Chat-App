import React from "react";
import data from "./data/data";
import "../src/Styles/ChatList.less";
export const ChatList = () => {
  return (
    <div className="chatList">
      {data.map((user) => {
        return (
          <div className="userChat" key={user.id}>
            <img src={user.img} alt="profile-default" />
            <div className="userChatInfo">
              <span className="name">{user.name}</span>
              <span className="lastMessage">{user.lastMessage}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
