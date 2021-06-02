module.exports = {
  'globals': {
    'document': false,
    'navigator': false,
    'window': false,
  },

  'extends': [
    './lintRules/eslint.js',
  ],

  'env': {
    'es6': true,
    'node': true,
    'browser': true,
  },

  'root': true,

  'settings': {
    'import/resolver': {
      'typescript': {},
    },
  },

  'overrides': [{
    'files': ['*'],
    'rules': {
      'react-hooks/rules-of-hooks': 'off',
      'max-classes-per-file': 'off',
      'consistent-return': 'off',
      'prefer-template': 'off',
      'no-nested-ternary': 'off',
      'import/order': 'off',
      'semi': ['error', 'always'],
      'no-async-promise-executor': 'off',
    },
  }, {
    files: [
      '*.ts',
      '*.tsx',
    ],
    parserOptions: {
      tsconfigRootDir: __dirname,
    },
    'rules': {
      '@typescript-eslint/restrict-plus-operands': 'off',
      '@typescript-eslint/no-use-before-define': 'off',

      '@typescript-eslint/semi': ['error', 'always'],

      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',

    },
  }],

  'rules': {
    'import/no-unassigned-import': 'off',
    '@typescript-eslint/member-ordering': 'off',
    // 'no-empty-function': ['off', { 'allow': ['arrowFunctions'] }],
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'react/jsx-no-target-blank': 'off',

    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
  },
};
