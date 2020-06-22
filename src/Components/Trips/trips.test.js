import React from "react";
import { shallow, mount } from "enzyme";
import { cleanup } from "@testing-library/react";

import Trips from "./Trips";
import Spinner from "../spinner/spinner";
import Modal from "../Modal/modal";

afterEach(cleanup);

xtest("should display a header", () => {
  const wrapper = shallow(<Trips />);
  const header = <h1>Welcome to JusticeRides. You can book your ride here!</h1>;
  expect(wrapper.contains(header)).toEqual(true);
});

xtest("should display a spinner", () => {
  const wrapper = mount(<Spinner />);
  expect(wrapper.exists()).toEqual(true);
});

xtest("should display a modal", () => {
  const wrapper = mount(<Modal />);
  expect(wrapper.exists()).toEqual(true);
  expect(wrapper.text().split(" ")[0]).toEqual("Available");
});
