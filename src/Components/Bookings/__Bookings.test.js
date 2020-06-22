import React, { useContext } from "react";
import { shallow, mount } from "enzyme";
import { cleanup } from "@testing-library/react";

import Bookings from "./Bookings";
import Spinner from "../spinner/spinner";

afterEach(cleanup);

xtest("that the component renders without crashing", () => {
  const wrapper = mount(<Bookings />);

  expect(wrapper.exists()).toBe(true);
});

xtest("component contains a greeting message", () => {
  const wrapper = shallow(<Bookings />);
  const h1 = <h1>Welcome to Bookings page</h1>;

  expect(wrapper.contains(h1)).toEqual(true);
});
xtest("that the children are mounted", () => {
  const wrapper = shallow(<Bookings />);
  const children = [
    <h1>Welcome to Bookings page</h1>,
    <p>You can view your bookings below</p>,
    <Spinner />,
    <Spinner />,
    false,
    false,
  ];
  expect(wrapper.find("div").props().children).toEqual(children);
});
