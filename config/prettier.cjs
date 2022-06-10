// https://prettier.io/docs/en/configuration.html
const config = {
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "lf",
  printWidth: 80,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "none",
  useTabs: false,
};

console.log("=== prettier config ===", config);

module.exports = config;
