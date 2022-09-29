/* eslint-disable import/no-import-module-exports */
import { merge } from 'webpack-merge'
import { buildFolderPath } from './constant'
import { webpackCommonSetup } from './webpack.common'
import {
  getCSSLoaderStandardSetup,
  getCSSMinimizerWebpackPluginStandardSetup,
  MiniCSSExtractPluginLoader,
  getMiniCSSExtractPluginAdvancedSetup,
} from '../../../webpack'

module.exports = merge(webpackCommonSetup, {
  mode: 'production',
  devtool: false,
  output: {
    path: buildFolderPath,
    publicPath: '/',
    filename: 'js/[name].[contenthash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCSSExtractPluginLoader,
          getCSSLoaderStandardSetup({ sourceMap: false, modules: { localIdentName: '[name]_[local]_[hash:base64:5]' } }),
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [getMiniCSSExtractPluginAdvancedSetup()],
  optimization: {
    minimize: true,
    minimizer: [getCSSMinimizerWebpackPluginStandardSetup(), '...'],
    runtimeChunk: { name: 'runtime' },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
})
