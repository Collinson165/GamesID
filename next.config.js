/** @type {import('next').NextConfig} */
// const withPlugins = require('next-compose-plugins');
// const withImages = require('next-images');
// const withSVGR = require('next-svgr');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['tailwindui.com', 'images.igdb.com']
  },
}

// const nextConfig = withPlugins([
//   withImages,
//   withSVGR,
// ], {
//   webpack(config, options){
//     return config;
//   },
// });

module.exports = nextConfig
