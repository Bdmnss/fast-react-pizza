module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'react-refresh',
    'tailwindcss',
    'prettier',
    'simple-import-sort',
    '@typescript-eslint',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSameLine: false,
      },
      {
        usePrettierrc: true,
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/no-custom-classname': 'off',
    'react/jsx-no-useless-fragment': [
      'warn',
      {
        max: 2,
      },
    ],
    'react/hook-use-state': ['error', { allowDestructuredState: true }],
    'react/forbid-elements': [
      1,
      {
        forbid: [
          {
            element: 'a',
            message: 'Use the <Link> or <NavLink> component instead of <a>.',
          },
        ],
      },
    ],
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ['(?!.*\\.css)^\\u0000'],
          ['^@?[a-z]'],
          ['^[^.]'],
          ['^\\..+(?!\\.css)'],
          ['.+\\.css'],
        ],
      },
    ],
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: 'last',
        ignoreCase: true,
        noSortAlphabetically: true,
        reservedFirst: true,
        locale: 'auto',
      },
    ],
    'react/no-string-refs': ['error', { noTemplateLiterals: true }],
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/comma-spacing': 'error',
    'react/self-closing-comp': 'warn',
    'react/no-multi-comp': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-children-prop': 'error',
    'react/jsx-tag-spacing': 'warn',
    'react/no-unused-state': 'warn',
    'react/no-array-index-key': 'warn',
    'react/jsx-boolean-value': 'warn',
    'react/jsx-no-duplicate-props': 'error',
    'react/destructuring-assignment': ['warn', 'always'],
    'no-var': 'warn',
    'react/no-deprecated': 'warn',
    'no-undef': 'warn',
    'no-unreachable': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-await-in-loop': 'error',
    'no-const-assign': 'error',
  },
};
