import React, { useState } from "react";
import {
  IoAttach,
  IoHappyOutline,
  IoSendOutline,
  IoImagesOutline,
  IoMicOutline,
} from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";

const Input = ({ onSendMessage }) => {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput(""); // Clear the input after the message is sent
    }
  };
  return (
    <div className="input">
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Type your message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="sendMessage">
          Send
          <IoSendOutline />
        </button>
      </form>
      <div className="inputIcons">
        <div className="more">
          <button>
            <IoHappyOutline />
          </button>
          <button>
            <IoAttach />
          </button>
          <button>
            <IoImagesOutline />
          </button>
          <button>
            <IoMicOutline />
          </button>
          <button>
            <IoMdAddCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
