import React from "react";
import ReactDOM from "react-dom/client"; // Updated import to use createRoot
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);