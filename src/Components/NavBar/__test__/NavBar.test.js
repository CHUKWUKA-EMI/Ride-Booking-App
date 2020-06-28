import React from "react";
import { BrowserRouter } from "react-router-dom";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import NavBar from "../NavBar";

afterEach(cleanup);

it("renders without crashing", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
});
it("renders a logo text", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  expect(screen.queryByTestId("header")).toBeInTheDocument();
});
it("displays a link", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  expect(screen.queryByTestId("link")).toBeInTheDocument();
});
