import { classNames } from "./string";

describe("string utility", () => {
  test("classNames", () => {
    let classNamesString = classNames(["a", "b"]);
    expect(classNamesString).toBe("a b");

    classNamesString = classNames(["a", undefined]);
    expect(classNamesString).toBe("a");

    classNamesString = classNames("a");
    expect(classNamesString).toBe("a");

    classNamesString = classNames([]);
    expect(classNamesString).toBe("");

    classNamesString = classNames(undefined);
    expect(classNamesString).toBe(undefined);
  });
});
