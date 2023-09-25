import { getUser } from "./user";

jest.mock("./user.default", () => ({
  ...jest.requireActual("./user.default"),
  sampleUser: jest.requireActual("./user.default"),
}));

describe("user", () => {
  test("getUser", async () => {
    const user = await getUser();
    expect(user).toStrictEqual(jest.requireActual("./user.default"));
  });
});
