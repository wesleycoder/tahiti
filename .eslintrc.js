/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: ["./packages/config/eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    tsconfigRootDir: __dirname,
    project: [
      "./**/tsconfig.json",
    ],
  },
  settings: {
    next: {
      rootDir: ["apps/tahiti"],
    },
  },
};

module.exports = config;
