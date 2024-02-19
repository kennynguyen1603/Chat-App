import React, { useState } from "react";
import { Search } from "./Search";
import { Navbar } from "./Navbar";
import { ChatList } from "./ChatList";
import data from "./data/data";
export const Sidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allUsers, setAllUsers] = useState(data);
  // Filter users based on the search query or show no users if the search query is empty
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
      <ChatList />
    </div>
  );
};
