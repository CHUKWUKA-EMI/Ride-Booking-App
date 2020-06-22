import React from "react";
import { shallow } from "enzyme";
import { cleanup } from "@testing-library/react";

import Modal from "../modal";
import ModalItems from "../Modal-Items/ModalItems";

afterEach(cleanup);

xtest("modal should display textLabels", () => {
  const wrapper = shallow(<Modal />);
  const textLabels = (
    <span>
      <label>Direction</label>
      <label>Duration</label>
      <label>Vehicle</label>
      <label>Cost</label>
    </span>
  );
  expect(wrapper.contains(textLabels)).toEqual(true);
});

xtest("should contain items", () => {
  const wrapper = shallow(<Modal />);
  const title = <p>Available Routes</p>;
  expect(wrapper.contains(title)).toEqual(true);
});
