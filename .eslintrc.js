module.exports = {
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
    "plugin:jsdoc/recommended",
  ],
  env: {
    es2020: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  ignorePatterns: [".eslintrc.js", "dist/", "coverage/, cdk.out/"],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "commonjs",
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint", "simple-import-sort", "jsdoc"],
  rules: {
    "no-new": "off",
    "linebreak-style": ["off"],
    "sort-imports": "off",
    "import/order": "off",
    "simple-import-sort/imports": "error",
    "import/no-import-module-exports": "off",
    "max-classes-per-file": "off",
    "import/prefer-default-export": "off",
    "no-await-in-loop": "off",
    "@typescript-eslint/quotes": ["warn", "double", { avoidEscape: true }],
    "no-new": ["warn"],
    "no-console": "off",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "variable",
        leadingUnderscore: "allow",
        format: null,
      },
    ],
    "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "_",
        argsIgnorePattern: "_",
      },
    ],
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    "class-methods-use-this": "off",
    "no-else-return": "off",
    "no-underscore-dangle": "off",
    "no-restricted-imports": [
      "error",
      {
        name: "lib/elastic.common",
        message: "elastic.common is disallowed, use lib/es.",
      },
    ],
    "import/no-extraneous-dependencies": [
      "warn",
      { devDependencies: false, optionalDependencies: false, peerDependencies: false },
    ],
  },
};
