import { render } from "@testing-library/react";
import React from "react";

import { WEEKS_PER_YEAR } from "@mylifeline/utilities";

import { LifeCalendar } from "./LifeCalendar";

import type { LifeCalendarProps } from "./LifeCalendar";

describe("LifeCalendar", () => {
  const defaultYears = 50;
  let props: LifeCalendarProps = {
    birthday: new Date("2000-01-01"),
    years: defaultYears,
    lifeEvents: [{ date: new Date("2000-01-05"), title: "Title" }],
  };
  const component = () => <LifeCalendar {...props} />;
  const renderComponent = () => render(component());

  beforeEach(() => {
    props = {
      birthday: new Date("2000-01-01"),
      years: 50,
      lifeEvents: [{ date: new Date("2000-01-05"), title: "Title" }],
    };
  });

  test("renders correct number of CalendarWeek components", () => {
    const { container } = renderComponent();

    const weekItems = container.querySelectorAll(`[data-testid^="week-"]`);
    expect(weekItems.length).toBe(props.years * WEEKS_PER_YEAR);
  });

  test("CalendarWeek has correct styling when hasEvent is true", () => {
    props.lifeEvents = [{ date: new Date("2000-01-05"), title: "Title" }];
    const { queryByTestId, rerender } = renderComponent();

    expect(queryByTestId("week-1")).toHaveClass("bg-purple-500");
    expect(queryByTestId("week-2")).not.toHaveClass("bg-purple-500");

    props.lifeEvents = [
      { date: new Date("2000-01-05"), title: "Title" },
      { date: new Date("2000-01-09"), title: "Title" },
    ];
    rerender(component());
    expect(queryByTestId("week-1")).toHaveClass("bg-purple-500");
    expect(queryByTestId("week-2")).toHaveClass("bg-purple-500");
  });
});
