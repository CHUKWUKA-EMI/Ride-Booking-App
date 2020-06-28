import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import CompletedModal from "./CompletedModal";

afterEach(cleanup);

test("component renders without crashing", () => {
  render(<CompletedModal />);
});

test("button is rendered", () => {
  render(<CompletedModal />);
  expect(screen.queryByTestId("completeModal-button")).toBeInTheDocument();
});
