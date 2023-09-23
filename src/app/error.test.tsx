import { render, screen } from "@testing-library/react";

import ErrorPage from "./error";

describe("GlobalError component", () => {
  const resetFunction = jest.fn();
  const consoleError = jest
    .spyOn(console, "error")
    .mockImplementation(() => {});

  it("renders main title", () => {
    render(<ErrorPage error={new Error("err")} reset={resetFunction} />);

    const title = screen.getByText("Something went wrong!");
    expect(title).toBeInTheDocument();
    expect(consoleError).toBeCalled();

    const resetButton = screen.getByTestId("reset-button");
    expect(resetButton).toHaveTextContent("Try again");

    resetButton.click();
    expect(resetFunction).toBeCalled();
  });
});
