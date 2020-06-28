import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Auth from "../auth";

afterEach(cleanup);

test("when the form is submitted without data, a message is shown", () => {
  const text = "Input field cannot be Empty!";
  render(<Auth>{text}</Auth>);

  expect(screen.queryByText(text)).toBeNull();

  fireEvent.submit(screen.queryByTestId("auth-form"));
  expect(screen.getByText(text)).toBeInTheDocument();
});

test("user text is echoed", () => {
  const email = "emi@gmail.com";
  render(<Auth>{email}</Auth>);

  expect(screen.queryByText(email)).toBeNull();

  fireEvent.change(screen.queryByTestId("email"));
  screen.queryByTestId("email").innerHTML = email;
  expect(screen.queryByTestId("email").innerHTML).toEqual(email);
});

test("login state", () => {
  const text = "Login";
  render(<Auth />);

  expect(screen.queryByTestId("submit-button").innerHTML).toEqual(text);
});
