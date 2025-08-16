import { defineConfig } from "vite";
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import react from '@vitejs/plugin-react'


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
  {
    base: '/kyonpsi/',
    plugins: [react()]
  }
]);