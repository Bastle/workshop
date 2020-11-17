/**
 * Created by cyb on 2019/3/14.
 */

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');

console.log('----------------------------->>>>>')
module.exports = {
  entry: {
    app: path.join(__dirname, '../src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/'
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../index.html')
    }),
    new WebpackBar()
  ],
  module:{
    rules:[
      {
        test: /\.js|jsx$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015']
            }
          }
        ]
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },{
        test: /\.(png|jpg|svg|gif)$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          'file-loader'
        ]
      },{
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          'file-loader'
        ]
      },{
        test: /\.(csv|tsv)$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          'csv-loader'
        ]
      }
    ]
  },
  watchOptions: {
    ignored: /node_modules/
  }
}