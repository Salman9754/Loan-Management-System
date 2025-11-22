// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
  // Base configuration
  {
    ignores: ["node_modules/**"]
  },
  
  // JavaScript files
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.node
      },
    },
  },
  
  // TypeScript files
  tseslint.configs.recommended,
  {
    files: ["**/*.{ts,mts,cts}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        // Remove tsconfigRootDir since we're using a relative path
        sourceType: "module",
        ecmaVersion: "latest",
      },
      globals: {
        ...globals.node
      },
    },
  }
);