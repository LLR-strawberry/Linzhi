const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const BaseConfig = require('./webpack.base.conf.js')

module.exports = merge(BaseConfig, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, '../dist'),
    compress: true, //开启gzip压缩
    port: 8080,
    open: true,
    hot: true,
    overlay: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
})
