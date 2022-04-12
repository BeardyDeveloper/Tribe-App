module.exports = {
  root: true,
  extends: ['@fullstacksjs'],
  settings: {
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json'],
      },
    },
  },
  rules: {
    'import/no-cycle': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-invalid-this': 'off',
    '@typescript-eslint/no-empty': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'require-await': 'off',
  },
};
