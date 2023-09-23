import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleNameMapper: {
    "@mylifeline/(.*)": "<rootDir>/src/libs/$1",
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coverageDirectory: "./out/coverage",
  collectCoverageFrom: [
    "./src/**/*.tsx",
    "./src/**/*.ts",

    "!./src/**/index.ts",
    "!./src/app/layout.tsx",
    "!./src/**/global-error.tsx",
    "!./src/libs/constants/**/*.ts",
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
