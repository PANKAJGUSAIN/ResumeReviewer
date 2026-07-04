import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "padding-line-between-statements": [
        "error",

        // space AFTER last import block
        { blankLine: "always", prev: "import", next: "const" },

        // space before export
        { blankLine: "always", prev: "*", next: "export" },

        // space before return
        { blankLine: "always", prev: "*", next: "return" },
      ],
      "no-console": "error",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
