/* eslint-disable import/no-import-module-exports */
import { merge } from 'webpack-merge'
import { includedSourceFilePaths, environmentVariablesFilePath } from './constant'
import { webpackCommonSetup } from './webpack.common'
import {
  getCSSLoaderStandardSetup,
  getPostCSSLoaderStandardSetup,
  getSassLoaderStandardSetup,
  getDotenvWebpackStandardSetup,
  getHotModuleReplacementPluginStandardSetup,
} from '../../../webpack'

module.exports = merge(webpackCommonSetup, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  plugins: [
    getDotenvWebpackStandardSetup({ path: environmentVariablesFilePath.development }),
    getHotModuleReplacementPluginStandardSetup(),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        include: includedSourceFilePaths,
        use: [
          'style-loader',
          getCSSLoaderStandardSetup({ sourceMap: false, modules: { localIdentName: '[name]_[local]_[hash:base64:5]' } }),
          getPostCSSLoaderStandardSetup(),
          getSassLoaderStandardSetup({ includedSourceFilePaths }),
        ],
      },
    ],
  },
})
