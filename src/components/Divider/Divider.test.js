import React from "react";
import { render, getByTestId } from "react-testing-library";

import Divider from "./Divider";

describe("Divider", () => {
  it("renders without crashing", () => {
    const { asFragment } = render(<Divider />);
    expect(asFragment()).toMatchSnapshot();
  });
});
