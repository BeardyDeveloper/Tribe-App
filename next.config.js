/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  },
  reactStrictMode: true,
  env: {
    APP_TITLE: process.env.APP_TITLE || 'Beardy',
    APP_DESC: process.env.APP_DESC || 'Web developers Hub',
  },
  // keep development cache indefinitely
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 1000,
    pagesBufferLength: 1000,
  },

  productionBrowserSourceMap: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
