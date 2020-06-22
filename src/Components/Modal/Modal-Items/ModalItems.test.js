import React from "react";
import { shallow } from "enzyme";
import { cleanup } from "@testing-library/react";

import ModalItems from "./ModalItems";

afterEach(cleanup);
beforeEach(() => jest.setTimeout(90000));

xtest("check items' properties", async () => {
  const wrapper = shallow(<ModalItems />);

  await expect(wrapper.find("button").getElement().props.children).toBe("Book");
  await expect(wrapper.find("button").getElement().props.className).toBe("btn");
  await expect(wrapper.find("input").getElement().props.type).toBe("checkbox");
});
