import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";

import Listing from "./Listing";

afterEach(cleanup);

const mockDetails = {
  id: "5b83f2b0ce8dea001ac412ed",
  make: "HYUNDAI",
  model: "TUCSON",
  year: 2015,
  version: "2.0 MPFI GLS 16V 143CV 2WD FLEX 4P AUTOMATICO",
  km: 46460,
  remainingTime: 1456713,
  imageUrl:
    "https://uploads.instacarro.com/JPEG_20180827_1117185b83f2b0ce8dea001ac412ed-1048370064.jpg",
  bids: [
    {
      amount: 40000,
      dealership: "Instacarro",
      createdAt: "2018-08-27T14:40:38.478Z",
      channel: "Mobile"
    },
    {
      amount: 40250,
      dealership: "Instacarro",
      createdAt: "2018-08-27T14:43:11.925Z",
      channel: "Web"
    }
  ]
};

describe("Listing", () => {
  it("renders without crashing", () => {
    const { asFragment } = render(<Listing details={mockDetails} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays the highest bid", () => {
    const { getByTestId } = render(<Listing details={mockDetails} />);

    expect(getByTestId("currentBid").textContent).toBe("R$ 40,250");
  });

  it("increases bid by R$ 250", () => {
    const { getByText, getByTestId } = render(
      <Listing details={mockDetails} />
    );
    fireEvent.click(getByText("Fazer oferta"));
    expect(getByTestId("currentBid").textContent).toBe("R$ 40,500");
  });
});
