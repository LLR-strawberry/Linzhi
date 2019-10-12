const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 自动创建html文件

module.exports = {
  devtool: 'inline-source-map', // 用于开发调试，方便清楚是那个文件出错 (共有7种)
  entry: {
    vendor: ['react', 'react-dom'],
    app: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: 'chunks/[name].[hash:4].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader?modules', 'sass-loader'] // 加载时顺序从右向左, 设置css模块化加载
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'img/[name].[hash:7].[ext]',
            outputPath: 'images/'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'images/fonts'
          }
        }
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  },

  resolve: {
    alias: {
      '@': path.resolve('src'),
      styles: path.resolve('src/assets/styles')
    },
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new webpack.optimize.SplitChunksPlugin({
      chunks: 'async',
      minSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true
    }),
    new HtmlWebpackPlugin({
      title: '领智',
      template: path.resolve(__dirname, '../src/index.html') //使用一个模板
    })
  ]
}
