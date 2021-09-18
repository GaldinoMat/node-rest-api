module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "class-methods-use-this": "off",
    quotes: [2, "double", "avoid-escape"],
    "comma-dangle": "off",
    "no-param-reassign": "off",
    // "no-unused-vars": "off",
  },
};
