"use client";

import { CalendarWeek } from "@mylifeline/ui/molecules";
import {
  WEEKS_IN_MILLISECONDS,
  WEEKS_PER_YEAR,
  classNames,
} from "@mylifeline/utilities";

import { getIsWithinWeek } from "./LifeCalendar.utils";

import type { LifeEvent } from "@mylifeline/data/user";
import type { CSSProperties } from "react";

export type LifeCalendarProps = {
  years: number;
  birthday: Date;
  lifeEvents: LifeEvent[];
  style?: CSSProperties;
  className?: string;
};

export const LifeCalendar = ({
  birthday,
  years,
  lifeEvents,
  style,
  className,
}: LifeCalendarProps) => {
  const totalWeeks = years * WEEKS_PER_YEAR;
  const totalWeeksArray = [...Array(totalWeeks)];

  const currentTimeMs = new Date().getTime() - birthday.getTime();
  const currentWeek = Math.floor(currentTimeMs / WEEKS_IN_MILLISECONDS);

  return (
    <ul
      style={style}
      className={classNames([
        "flex flex-wrap w-full justify-center md:justify-start",
        className,
      ])}
    >
      {totalWeeksArray.map((_, index) => {
        const isPassed = index + 1 < currentWeek;
        const hasEvent = lifeEvents.some((lifeEvent) =>
          getIsWithinWeek(lifeEvent.date, birthday, index + 1)
        );

        return (
          <CalendarWeek
            key={index}
            dataTestId={`week-${index + 1}`}
            isPassed={isPassed}
            hasEvent={hasEvent}
          />
        );
      })}
    </ul>
  );
};
