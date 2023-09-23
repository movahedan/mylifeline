import { render } from "@testing-library/react";

import { Navbar } from "./Navbar";

describe("Navbar", () => {
  test("snapshot test", () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
