module.exports = {
  "**/*.ts?(x)": (files) => [
    "yarn type-check",
    `yarn lint --quiet --fix`,
    `yarn test --bail --findRelatedTests ${files.join(" ")}`,
  ],
};
