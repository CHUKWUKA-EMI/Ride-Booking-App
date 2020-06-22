import React, { useContext } from "react";
import { shallow, mount, render } from "enzyme";
import { cleanup } from "@testing-library/react";

import CompletedModal from "./CompletedModal";

afterEach(cleanup);

xtest("component renders without crashing", () => {
  const wrapper = mount(<CompletedModal />);
  console.log(wrapper.debug());
  expect(wrapper.exists()).toEqual(true);
});

xtest("children nodes are rendered", () => {
  const wrapper = mount(<CompletedModal />);
  const div = document.createElement("div");
  expect(wrapper.find("button").text()).toBe("Close");
  expect(wrapper.contains(div)).toEqual(true);
});
