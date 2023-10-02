module.exports = {
  "**/*.ts?(x)": (files) => {
    const scripts = ["yarn type-check", `yarn lint --quiet --fix`];

    const filesString = files.join(" ");
    const testScript = `yarn test --bail --passWithNoTests --findRelatedTests ${filesString}`;
    if (files.length) scripts.push(testScript);

    return scripts;
  },
};
