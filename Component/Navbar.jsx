import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState("All"); // All, Read, Unread

  // Pass the new active state directly to the handleToggle function
  const handleToggle = (newActive) => {
    setActive(newActive);
  };

  // check active state
  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <div className="navbar">
      <div className="toggle-switch">
        <button
          className={`toggle-btn ${active === "All" ? "active" : ""}`}
          onClick={() => handleToggle("All")}
        >
          All
        </button>
        <button
          className={`toggle-btn ${active === "Read" ? "active" : ""}`}
          onClick={() => handleToggle("Read")}
        >
          Read
        </button>
        <button
          className={`toggle-btn ${active === "Unread" ? "active" : ""}`}
          onClick={() => handleToggle("Unread")}
        >
          Unread
        </button>
      </div>
    </div>
  );
};
