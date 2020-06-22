import React from "react";
import { NavLink } from "react-router-dom";
import { shallow } from "enzyme";
import { cleanup } from "@testing-library/react";

import PageNotFound from "./404ErrorPage";

afterEach(cleanup);

xtest("the component is rendered", () => {
  const wrapper = shallow(<PageNotFound />);

  expect(wrapper.exists()).toBe(true);
});
xtest("that the nodes are rendered and 404 is displayed", () => {
  const wrapper = shallow(<PageNotFound />);
  const childNodes = (
    <div className="error-page">
      <h2>404</h2>
      <h3>Page Not Found!</h3>
      <p>
        <li>
          Go back to
          <NavLink to="/auth"> Home Page</NavLink>
        </li>
      </p>
    </div>
  );
  expect(wrapper.contains(childNodes)).toBe(true);
});
