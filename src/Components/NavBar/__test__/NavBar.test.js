import React from "react";
import { NavLink } from "react-router-dom";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";

import NavBar from "../NavBar";

afterEach(cleanup);

xit("renders without crashing", () => {
  shallow(<NavBar />);
});
xit("renders a logo text", () => {
  const wrapper = shallow(<NavBar />);
  const text = <h1>JusticeRides</h1>;
  expect(wrapper.contains(text)).toEqual(true);
});
xit("display a link", () => {
  const wrapper = shallow(<NavBar />);
  const link = (
    <li>
      <NavLink to="/auth">Authentication</NavLink>
    </li>
  );
  expect(wrapper.contains(link)).toEqual(true);
});
