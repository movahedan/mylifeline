import { render, screen } from "@testing-library/react";

import { notFoundContent } from "@mylifeline/contents/not-found";

import NotFound from "./page";

describe("NotFound component", () => {
  it("renders main title", () => {
    render(<NotFound />);

    expect(screen.getByText(notFoundContent.title)).toBeInTheDocument();
  });
});
