/**
 * Created by cyb on 2019/3/14.
 */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  // devtool: 'source-map',
  devtool: 'eval',
  
  // devServer: {
  //   contentBase: './dist'
  // }
  devServer: {
    historyApiFallback: true,
    hot: true
  }
})