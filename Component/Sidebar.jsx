import React, { useState } from "react";
import { Search } from "./Search";
import { Navbar } from "./Navbar";
import { ChatList } from "./ChatList";
import data from "./data/data";
export const Sidebar = ({ onSelectUser }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allUsers, setAllUsers] = useState(data);
  const filteredUsers = searchQuery
    ? allUsers.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="sidebar">
      <Search
        onSearch={(query) => setSearchQuery(query)}
        users={filteredUsers}
      />
      <Navbar />
      <ChatList onClick={onSelectUser} />
    </div>
  );
};
