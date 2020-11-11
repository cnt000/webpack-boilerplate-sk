module.exports = {
  env: {
    browser: true,
    jest: true,
    es2020: true,
  },
  plugins: ['react'],
  rules: {
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    'react/prop-types': 0,
    'comma-dangle': 0,
    'import/no-unresolved': 'off',
  },
  extends: [
    'standard',
    'standard-react',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
};
