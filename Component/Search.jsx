import React from "react";
import { FaUser } from "react-icons/fa";

export const Search = ({ onSearch, users }) => {
  return (
    <div className="search">
      <div className="searchForm">
        <FaUser className="icon" />
        <input
          type="text"
          placeholder="People, Group and Messages"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div className="userChat">
        {/* <img
          src="https://vcdn-vnexpress.vnecdn.net/2021/12/13/elon-musk-2-9936-1639406089.jpg"
          alt="profile-default"
        />
        <div className="userChatInfo">
          <span className="name" style={{ marginLeft: "10px" }}>
            Elon Musk
          </span>
        </div> */}
        {users.map((user) => {
          return (
            <div className="userChat" key={user.id}>
              <img src={user.img} alt="profile-default" />
              <div className="userChatInfo">
                <span className="name">{user.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
