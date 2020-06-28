import React from "react";
import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";

import BookingsModal from "./BookingsModal";

afterEach(cleanup);

test("component renders without crashing", () => {
  render(<BookingsModal />);
});

test("check that the buttons are rendered", () => {
  render(<BookingsModal />);

  expect(screen.queryByTestId("edit-button")).toBeInTheDocument();
  expect(screen.queryByTestId("delete-button")).toBeInTheDocument();
  expect(screen.queryByTestId("close-button")).toBeInTheDocument();
});
