const path = require('path');
const { merge } = require('webpack-merge');
const { EnvironmentPlugin } = require('webpack');
const configWebpack = require('./webpack.config')

const devConfig = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true
  },
  plugins: [
    new EnvironmentPlugin({
      API: 'htpps://dev.galbeiroc.com'
    }),
  ]
}

module.exports = merge(configWebpack, devConfig);
