const { merge } = require('webpack-merge');
const { EnvironmentPlugin } = require('webpack');
const configWebpack = require('./webpack.config')

const devConfig = {
  mode: 'development',
  plugins: [
    new EnvironmentPlugin({
      API: 'htpps://dev.galbeiroc.com'
    }),
  ]
}

module.exports = merge(configWebpack, devConfig);
