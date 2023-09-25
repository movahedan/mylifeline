import { render } from "@testing-library/react";

import { CalendarWeek } from "./CalendarWeek";

import type { CalendarWeekProps } from "./CalendarWeek";

describe("CalendarWeek", () => {
  let props: CalendarWeekProps = {};
  const dataTestId = "week";

  beforeEach(() => {
    props = {};
  });

  test("should be rendered correctly", () => {
    const { container, queryByTestId } = render(<CalendarWeek {...props} />);
    expect(container).toMatchSnapshot("default");
    expect(queryByTestId(dataTestId)).toHaveClass("bg-slate-400");
    expect(queryByTestId(dataTestId)).not.toHaveClass("bg-green-500");
    expect(queryByTestId(dataTestId)).not.toHaveClass("bg-purple-500");
  });

  test("passed week should be green", () => {
    props.isPassed = true;
    const { container, queryByTestId } = render(<CalendarWeek {...props} />);
    expect(container).toMatchSnapshot("passed week");
    expect(queryByTestId(dataTestId)).toHaveClass("bg-green-500");
  });

  test("week which has event should be purple, doesn't matter it is passed or not", () => {
    props.hasEvent = true;
    const { container, rerender, queryByTestId } = render(
      <CalendarWeek {...props} />
    );
    expect(container).toMatchSnapshot("has event week");
    expect(queryByTestId(dataTestId)).toHaveClass("bg-purple-500");
    expect(queryByTestId(dataTestId)).not.toHaveClass("bg-green-500");

    props.isPassed = true;
    rerender(<CalendarWeek {...props} />);
    expect(container).toMatchSnapshot("passed week which has event");
    expect(queryByTestId(dataTestId)).toHaveClass("bg-purple-500");
    expect(queryByTestId(dataTestId)).not.toHaveClass("bg-green-500");
  });
});
