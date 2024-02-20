import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./Home";

// function emitComment(id) {
//   const newComment = new CustomEvent(`lession-${id}`, {
//     detail: `Nội dung comment của lession ${id}`,
//   });
//   setInterval(() => {
//     window.dispatchEvent(newComment);
//   }, 2000);
// }

// emitComment(1);
// emitComment(2);
// emitComment(3);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
