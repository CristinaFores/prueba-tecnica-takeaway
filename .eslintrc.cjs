module.exports = {
  env: { browser: true, es2021: true },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh"],
  rules: {
    "no-undef": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-prototype-builtins": "off",
  },
};
