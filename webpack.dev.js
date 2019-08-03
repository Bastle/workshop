/**
 * Created by cyb on 2019/3/14.
 */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: './dist'
  // }
})