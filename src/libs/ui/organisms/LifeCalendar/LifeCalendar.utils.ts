import { WEEKS_IN_MILLISECONDS } from "@mylifeline/utilities";

export const getIsWithinWeek = (date: Date, birthday: Date, week: number) => {
  const differenceMs = date.getTime() - birthday.getTime();
  const weekFromBirthday = Math.ceil(differenceMs / WEEKS_IN_MILLISECONDS);
  const weekDifference = weekFromBirthday - week;

  return weekDifference === 0;
};
