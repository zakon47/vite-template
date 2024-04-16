module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['', './public'],
          ['@', './src'],
          ['@layouts', './src/layouts'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss'],
      },
    },
  },
  overrides: [
    {
      files: ['*.scss', '*.css'],
      rules: {
        'import/no-unresolved': 'off',
      },
    },
  ],
};
