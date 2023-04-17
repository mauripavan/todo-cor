/* eslint-disable */
module.exports = {
  env: { browser: true, es6: true, jest: true, node: true, commonjs: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  globals: { __DEV__: "readonly" },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "react-hooks", "prettier"],
  rules: {
    "react/display-name": "off",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "react/no-children-prop": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "import/order": [
      "error",
      {
        groups: [["builtin", "external", "internal"]],
        "newlines-between": "always",
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "prettier/prettier": 2,
  },
  settings: { react: { version: "detect" } },
};
