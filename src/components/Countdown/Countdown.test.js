import React from "react";
import ReactDOM from "react-dom";
import {
  render,
  fireEvent,
  getByTestId,
  rerender,
  cleanup
} from "react-testing-library";
import { act } from "react-dom/test-utils";

import Countdown from "./Countdown";

afterEach(cleanup);

describe("Countdown", () => {
  it("renders without crashing", () => {
    const { asFragment } = render(<Countdown initialTimerTime={1000} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("displays 5 seconds", () => {
    const { container } = render(<Countdown initialTimerTime={5000} />);
    const timerValue = getByTestId(container, "timerValue");
    expect(timerValue.textContent).toBe("00:00:05");
  });

  it("ticks down timer", async () => {
    jest.useFakeTimers();

    const { container } = render(<Countdown initialTimerTime={5000} />);
    let timerValue = await getByTestId(container, "timerValue");
    expect(timerValue.textContent).toBe("00:00:05");

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    timerValue = await getByTestId(container, "timerValue");
    expect(timerValue.textContent).toBe("00:00:04");
  });
});
