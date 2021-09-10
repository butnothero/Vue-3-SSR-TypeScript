module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'class-methods-use-this': 0,
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    'import/prefer-default-export': 'off',
    camelcase: 'warn',
    'vue/no-unused-components': 'warn',
    ' @typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'max-len': 'off',
    'global-require': 'off',
    'no-return-await': 'off',
    'no-plusplus': 'warn',
    'guard-for-in': 'warn',
    'no-unused-expressions': 'warn',
    'import/extensions': 'warn',
    'no-param-reassign': 'warn',
    'no-shadow': 'warn',
    'no-return-assign': 'warn',
    'no-restricted-syntax': 'warn',
    'no-use-before-define': 'warn',
    'implicit-arrow-linebreak': 'off',
    'newline-per-chained-call': 'off',
    'import/no-unresolved': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
