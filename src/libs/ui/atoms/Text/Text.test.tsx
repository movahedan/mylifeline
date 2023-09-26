import { render } from "@testing-library/react";

import { Text } from "./Text";

describe("<Text>", () => {
  it("should match is's snapshot", () => {
    const { container, rerender } = render(<Text>Hello</Text>);
    expect(container).toMatchSnapshot("default");

    rerender(<Text inline>Hello</Text>);
    expect(container).toMatchSnapshot("inline");
  });
});
