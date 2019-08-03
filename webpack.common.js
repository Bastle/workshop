/**
 * Created by cyb on 2019/3/14.
 */

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'production'
    })
  ],
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },{
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          'file-loader'
        ]
      },{
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },{
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },{
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
}