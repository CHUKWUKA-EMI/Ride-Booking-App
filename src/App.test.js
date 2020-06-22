import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "./App";

xtest("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
