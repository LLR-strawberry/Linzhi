const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebPackPlugin = require('clean-webpack-plugin') // 清楚多余文件
const BaseConfig = require('./webpack.base.conf.js')

module.exports = merge(BaseConfig, {
  mode: 'production'
  // plugins: [new CleanWebPackPlugin('../dist')]
})
