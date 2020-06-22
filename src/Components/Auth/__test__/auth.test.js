import React from "react";
import { shallow, render } from "enzyme";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Auth from "../auth";

afterEach(cleanup);

xtest("when the form is submitted, the event is cancelled", () => {
  const wrapper = shallow(<Auth />);
  let prevented = false;
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {
      prevented = true;
    },
  });
  expect(prevented).toBe(true);
});

xtest("user text is echoed", () => {
  const wrapper = shallow(<Auth />);
  wrapper
    .find("input")
    .first()
    .simulate("change", {
      target: { value: "emi@gmail.com" },
    });

  expect(wrapper.find("input").first().props().value).toEqual("emi@gmail.com");
});

xtest("login state", () => {
  const wrapper = shallow(<Auth />);

  expect(wrapper.find("button").getElement().props.type).toEqual("submit");
  expect(wrapper.find("button").getElement().props.children).toEqual("Login");
});
