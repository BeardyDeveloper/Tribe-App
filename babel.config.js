module.exports = {
  presets: ['next/babel'],
  plugins: [
    'inline-react-svg',
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
  ],
};
