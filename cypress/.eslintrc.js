module.exports = {
  root: true,
  plugins: ["eslint-plugin-cypress"],
  extends: [
    "eslint:recommended",
    "eslint-config-prettier",
    "react-app",
    "plugin:cypress/recommended"
  ],
  env: { "cypress/globals": true },
  overrides: [
    {
      files: "**/*.+(ts|tsx)",
      parser: "@typescript-eslint/parser",
      parserOptions: {},
      plugins: ["@typescript-eslint/eslint-plugin"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
      ],
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-non-null-assertion": "off"
      }
    }
  ]
};
