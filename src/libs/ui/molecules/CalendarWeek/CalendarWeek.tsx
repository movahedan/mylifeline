import { twMerge } from "tailwind-merge";

import { classNames } from "@mylifeline/utilities";

import type { CSSProperties } from "react";

export type CalendarWeekProps = {
  dataTestId?: string;
  isPassed?: boolean;
  hasEvent?: boolean;
  style?: CSSProperties;
  className?: string;
};

export const CalendarWeek = ({
  dataTestId = "week",
  isPassed = false,
  hasEvent = false,
  style,
  className,
}: CalendarWeekProps) => {
  return (
    <li
      data-testid={dataTestId}
      style={style}
      className={classNames([
        "w-8 h-8 mx-1 my-1",
        twMerge(
          "bg-slate-400",
          isPassed && "bg-green-500",
          hasEvent && "bg-purple-500",
          className
        ),
      ])}
    />
  );
};
