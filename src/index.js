import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import serviceWorker from "./serviceWorker";
import App from "./App";
import dotenv from "dotenv";

dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
