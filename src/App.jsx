import React, { useEffect } from "react";
import "./Styles/App.less";
import { Sidebar } from "../Component/Sidebar.jsx";
import { Chat } from "../Component/Chat.jsx";
import data from "../Component/data/data";

const App = () => {
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [dataUser, setDataUser] = React.useState(null);

  useEffect(() => {
    setDataUser(data.find((user) => user.id === selectedUser));
  }, [selectedUser]);

  useEffect(() => {
    console.log(dataUser);
  }, [dataUser]);
  return (
    <div className="app">
      <div className="container">
        <Sidebar onSelectUser={setSelectedUser} />
        <Chat userId={selectedUser} userInfo={dataUser} />
      </div>
    </div>
  );
};

export default App;
