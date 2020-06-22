import React from "react";
import { mount } from "enzyme";
import { cleanup } from "@testing-library/react";

import BookingsModal from "./BookingsModal";

afterEach(cleanup);

xtest("component renders without crashing", () => {
  const wrapper = mount(<BookingsModal />);

  expect(wrapper.exists()).toBe(true);
});

xtest("check that the buttons are rendered", () => {
  const wrapper = mount(<BookingsModal />);

  expect(wrapper.find("button").first().text()).toEqual("Edit");
  expect(wrapper.find("button").at(1).text()).toEqual("Delete");
  expect(wrapper.find("button").at(2).text()).toEqual("Back");
  expect(wrapper.find("button")).toHaveLength(3);
});
