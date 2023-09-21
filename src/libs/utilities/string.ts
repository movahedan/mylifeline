export const classNames = (
  classNamesArray: (string | undefined)[] | string | undefined
) =>
  typeof classNamesArray === "string" || classNamesArray === undefined
    ? classNamesArray
    : classNamesArray.filter(Boolean).join(" ");
