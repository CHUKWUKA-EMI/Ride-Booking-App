import React from "react";
import { BrowserRouter } from "react-router-dom";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import PageNotFound from "./404ErrorPage";

afterEach(cleanup);

test("the component is rendered", () => {
  render(
    <BrowserRouter>
      <PageNotFound />
    </BrowserRouter>
  );
});
test("that the nodes are rendered and 404 is displayed", () => {
  render(
    <BrowserRouter>
      <PageNotFound />
    </BrowserRouter>
  );

  expect(screen.queryByTestId("error-page")).toBeInTheDocument();
});
