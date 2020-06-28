import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ModalItems from "./ModalItems";

afterEach(cleanup);

test("check that modal items and elements are rendered", () => {
  render(<ModalItems />);

  expect(screen.queryByTestId("modalitems")).toBeInTheDocument();
  expect(screen.queryByTestId("modal-input")).toBeInTheDocument();
  expect(screen.queryByTestId("modal-button")).toBeInTheDocument();
});
