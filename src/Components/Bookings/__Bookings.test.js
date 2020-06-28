import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Bookings from "./Bookings";
import Spinner from "../spinner/spinner";

afterEach(cleanup);

test("that the component renders without crashing", () => {
  render(<Bookings />);
});

test("component contains a greeting message", () => {
  const greeting = "Welcome to Bookings page";
  render(<Bookings>{greeting}</Bookings>);

  expect(screen.queryByText(greeting)).toBeDefined();
});
test("that the children are mounted", () => {
  render(<Bookings />);
  render(<Spinner />);

  expect(screen.getByTestId("direct")).toBeInTheDocument();
});
