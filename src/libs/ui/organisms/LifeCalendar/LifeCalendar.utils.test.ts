import { WEEKS_IN_MILLISECONDS } from "@mylifeline/utilities";

import { getIsWithinWeek } from "./LifeCalendar.utils";

describe("LifeCalendar.utils", () => {
  test("getIsWithinWeek should return true if an event has happened at nth week of a given date, otherwise it should return false", () => {
    const today = new Date();
    const tenDaysMilliseconds = (WEEKS_IN_MILLISECONDS / 7) * 10;
    const tenDaysFromNow = new Date(today.getTime() + tenDaysMilliseconds);
    const tenDaysBefore = new Date(today.getTime() - tenDaysMilliseconds);

    expect(getIsWithinWeek(tenDaysFromNow, today, 1)).toBe(false);
    expect(getIsWithinWeek(tenDaysFromNow, today, 2)).toBe(true);
    expect(getIsWithinWeek(tenDaysFromNow, today, 3)).toBe(false);

    expect(getIsWithinWeek(tenDaysBefore, today, 1)).toBe(false);
    expect(getIsWithinWeek(tenDaysBefore, today, 2)).toBe(false);
    expect(getIsWithinWeek(tenDaysBefore, today, 3)).toBe(false);
  });
});
