import { render } from "@testing-library/react";

import { homepageContent } from "@mylifeline/contents/home-page";

import Home from "./page";

describe("Home component", () => {
  it("renders main title", () => {
    const { getByText } = render(<Home />);
    const title = getByText(homepageContent.title);

    expect(title).toBeInTheDocument();
  });
});
