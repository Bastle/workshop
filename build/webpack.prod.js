/**
 * Created by cyb on 2019/3/14.
 */
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer');


module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackBundleAnalyzer.BundleAnalyzerPlugin()
  ]
})
