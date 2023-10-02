import type { UserConfig, PromptConfig } from "@commitlint/types";

const types: PromptConfig["questions"]["type"] = {
  description: "Select the type of change that you're committing:",
  enum: {
    feature: {
      description: "A new feature",
      title: "Features",
      emoji: "✨",
    },
    fix: {
      description: "A bug fix",
      title: "Bug Fixes",
      emoji: "🐛",
    },
    docs: {
      description: "Documentation only changes",
      title: "Documentation",
      emoji: "📚",
    },
    style: {
      description:
        "Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)",
      title: "Styles",
      emoji: "💎",
    },
    refactor: {
      description: "A code change that neither fixes a bug nor adds a feature",
      title: "Code Refactoring",
      emoji: "📦",
    },
    perf: {
      description: "A code change that improves performance",
      title: "Performance Improvements",
      emoji: "🚀",
    },
    test: {
      description: "Adding missing tests or correcting existing tests",
      title: "Tests",
      emoji: "🚨",
    },
    build: {
      description:
        "Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)",
      title: "Builds",
      emoji: "🛠",
    },
    ci: {
      description:
        "Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)",
      title: "Continuous Integrations",
      emoji: "⚙️",
    },
    chore: {
      description: "Other changes that don't modify src or test files",
      title: "Chores",
      emoji: "♻️",
    },
    revert: {
      description: "Reverts a previous commit",
      title: "Reverts",
      emoji: "🗑",
    },
  },
};

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "type-enum": [2, "always", Object.keys(types.enum || {})],

    "header-full-stop": [2, "always", "."],
    "header-max-length": [2, "always", 100],

    "subject-case": [2, "always", "sentence-case"],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "always", "."],

    "body-case": [2, "always", "sentence-case"],
    "body-leading-blank": [1, "always"],
    "body-max-line-length": [2, "always", 100],

    "footer-leading-blank": [1, "always"],
    "footer-max-line-length": [2, "always", 100],
  },
  prompt: {
    settings: {
      enableMultipleScopes: true,
      scopeEnumSeparator: ",",
    },
    messages: {
      skip: ":skip",
      max: "upper %d chars",
      min: "%d chars at least",
      emptyWarning: "can not be empty",
      upperLimitWarning: "over limit",
      lowerLimitWarning: "below limit",
    },
    questions: {
      type: types,
      subject: {
        description:
          "Write a short, imperative tense description of the change",
      },
      body: {
        description: "Provide a longer description of the change",
      },
    },
  },
};

export default config;
