module.exports = {
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'script',
    ecmaFeatures: {
      jsx: false,
    },
  },
  env: {
    browser: false,
    node: true,
  },
  ignorePatterns: ['node_modules/', '.eslintrc.js'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
      { usePrettierrc: false },
    ],
  },
}
