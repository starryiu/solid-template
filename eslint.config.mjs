import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files:["src/**/*.{ts,tsx}"],
    ignores: ["**/*.config.js"],
    rules:{
      "no-console":"warn",
      "@typescript-eslint/ban-ts-comment":'warn'
    },
  },
];