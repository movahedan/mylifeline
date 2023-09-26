import { act, render } from "@testing-library/react";

import { defaultUser, getUser } from "@mylifeline/data/user";

import Home from "./page";

const consoleError = jest.spyOn(console, "error").mockImplementation(() => {});
jest.mock("@mylifeline/data/user", () => ({
  ...jest.requireActual("@mylifeline/data/user"),
  getUser: jest.fn().mockImplementation(() => Promise.resolve(defaultUser)),
}));

describe("Home component", () => {
  it("renders user and calendar", async () => {
    let component: HTMLElement | undefined = undefined;

    await act(async () => {
      const { container } = render(<Home />);
      component = container;
    });

    expect(component).toMatchSnapshot("default");
    expect(
      (component as unknown as HTMLElement).querySelector(
        "[data-testid=username]"
      )
    ).toHaveTextContent("firstName lastName");
  });

  it("renders default user and default calendar when getUser throws an error", async () => {
    (getUser as jest.Mock).mockImplementationOnce(() => Promise.reject(null));

    let component: HTMLElement | undefined = undefined;

    await act(async () => {
      const { container } = render(<Home />);
      component = container;
    });

    expect(consoleError).toHaveBeenCalledTimes(1);
    expect(component).toMatchSnapshot("error");
    expect(
      (component as unknown as HTMLElement).querySelector(
        "[data-testid=username]"
      )
    ).toHaveTextContent("Loading...");
  });
});
