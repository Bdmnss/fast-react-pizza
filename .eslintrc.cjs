module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended', // Add Tailwind CSS plugin
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'tailwindcss'], // Add the tailwindcss plugin
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Disable prop-types validation for 'children'
    'react/prop-types': ['warn', { skipUndeclared: true }],
    // Optional: Tailwind CSS rule for sorting classes
    'tailwindcss/classnames-order': 'warn', // Enforces the correct ordering of Tailwind CSS classes
    'tailwindcss/no-custom-classname': 'warn', // Warns against custom classnames if using Tailwind
  },
};
