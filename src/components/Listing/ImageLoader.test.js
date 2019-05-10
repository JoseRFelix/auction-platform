import React from "react";
import { render } from "react-testing-library";

import ImageLoader from "./ImageLoader";

describe("ImageLoader", () => {
  it("renders without crashing", () => {
    const { asFragment } = render(
      <ImageLoader
        src="https://via.placeholder.com/150"
        alt="image"
        className="image"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
