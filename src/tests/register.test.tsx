import React from "react";
import { act } from "react-dom/test-utils";
import Register, { RegisterInput } from "../pages/Register/Register";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, mount, render, configure } from "enzyme";

configure({ adapter: new Adapter() });
let wrapper;
beforeEach(() => (wrapper = shallow(<Register />)));

describe("<Register/> page", () => {
  it("renders register page", async () => {
    expect(
      wrapper.contains(<p className="mb-0">Register a new membership</p>)
    ).toBeTruthy();
  });

  it("should have correct number of register form fields", async () => {
    let inputs = wrapper.find(RegisterInput);
    expect(inputs).toHaveLength(9);
  });
});
