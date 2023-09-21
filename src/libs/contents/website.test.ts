import { homepageContent } from "./home-page";
import {
  websiteDomain,
  websiteBaseUrl,
  websiteName,
  websiteDescription,
} from "./website";

describe("Constants", () => {
  test('websiteDomain should be "mylifeline.dev"', () => {
    expect(websiteDomain).toBe("mylifeline.dev");
  });

  test('websiteBaseUrl should be "https://www.mylifeline.dev"', () => {
    expect(websiteBaseUrl).toBe("https://www.mylifeline.dev");
  });

  test('websiteName should be "mylifeline"', () => {
    expect(websiteName).toBe("My Lifeline");
  });

  test("websiteDescription should match homepageContent.slogan", () => {
    expect(websiteDescription).toBe(homepageContent.title);
  });
});
