const path = require('path');
const dotenv = require('dotenv');

let envConfig;
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development' && process.env.NODE_ENV !== 'production') {
  envConfig = dotenv.config({
    path: path.join(__dirname, `.env.${process.env.NODE_ENV}`),
  });
} else {
  envConfig = dotenv.config();
}

if (envConfig.error) {
  throw envConfig.error;
}

module.exports = {
  exportTrailingSlash: true,
  webpack: (config) => {
    const newConfig = config;
    newConfig.resolve.modules.push(path.resolve('./'));
    newConfig.resolve.alias = {
      ...config.resolve.alias,
      '@utils': path.join(__dirname, './src/utils'),
      '@styles': path.join(__dirname, './src/styles'),
      '@components': path.join(__dirname, './src/components'),
    };

    // const originalEntry = config.entry;
    // newConfig.entry = async () => {
    //   const entries = await originalEntry();
    //   if (
    //     entries['main.js']
    //     && !entries['main.js'].includes(path.join(__dirname, './src/utils/polyfills.js'))
    //   ) {
    //     entries['main.js'].unshift(path.join(__dirname, './src/utils/polyfills.js'));
    //   }
    //   return entries;
    // };
    return newConfig;
  },
  env: {
    ...envConfig,
  },
  publicRuntimeConfig: {
    ...envConfig,
  },
};
