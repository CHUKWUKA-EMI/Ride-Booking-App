import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Trips from "./Trips";
import Spinner from "../spinner/spinner";
import Modal from "../Modal/modal";

afterEach(cleanup);

test("should display a header", () => {
  const header = "Welcome to JusticeRides. You can book your ride here!";
  render(<Trips>{header}</Trips>);

  expect(screen.queryByText(header)).toBeInTheDocument();
});

test("should display a spinner", () => {
  render(<Spinner />);
});

test("should display a modal", () => {
  const text = "Available Routes";
  render(<Modal>{text}</Modal>);

  expect(screen.queryByText(text)).toBeInTheDocument();
});
