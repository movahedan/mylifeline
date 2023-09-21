import { render } from "@testing-library/react";

import { Button } from "./Button";

describe("<Button>", () => {
  it("should match is's snapshot", () => {
    const { container, rerender } = render(<Button>Hello</Button>);
    expect(container).toMatchSnapshot("default");

    rerender(<Button icon="i">Hello</Button>);
    expect(container).toMatchSnapshot("icon default");
  });
});
