import { render } from "@testing-library/react";

import { Footer } from "./Footer";

describe("<Footer>", () => {
  it("should match is's snapshot", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot("default");
  });
});
