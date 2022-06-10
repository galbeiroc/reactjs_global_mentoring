const { merge } = require('webpack-merge');
const { EnvironmentPlugin } = require('webpack');
const configWebpack = require('./webpack.config')

const prodConfig = {
  mode: 'production',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  plugins: [
    new EnvironmentPlugin({
      API: 'htpps://galbeiroc.com',
    }),
  ]
}

module.exports = merge(configWebpack, prodConfig);
