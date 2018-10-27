const Dotenv = require('dotenv-webpack');
const alias = require('pring/webpack-alias');

module.exports = {
  configureWebpack: {
    resolve: {
      alias,
    },
    plugins: [
      new Dotenv(),
    ],
  },
};
