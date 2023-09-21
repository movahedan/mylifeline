import { formatDate } from "./date";

describe("date utility", () => {
  test("formatDate", () => {
    const formattedDate = formatDate(new Date("1/1/2023"));
    expect(formattedDate).toBe("2023-01-01");
  });
});
