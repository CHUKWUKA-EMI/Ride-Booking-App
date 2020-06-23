import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Modal from "../modal";

afterEach(cleanup);

test("modal should display textLabels", () => {
  render(<Modal />);

  expect(screen.queryByTestId("routes")).toBeInTheDocument();
});

test("should contain items", () => {
  const title = "Available Routes";
  render(<Modal>{title}</Modal>);

  expect(screen.queryByText(title)).toBeInTheDocument();
});
