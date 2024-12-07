import jsPlugin from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...jsPlugin.configs.recommended.rules, // Spread JS recommended rules
      ...tsPlugin.configs.recommended.rules, // Spread TypeScript recommended rules
      ...prettierConfig.rules, // Spread Prettier rules
      'no-unused-vars': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
    },
    ignores: ['node_modules/', 'dist/'], // Patterns to ignore
  },
];
