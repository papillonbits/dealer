/* eslint-disable import/no-import-module-exports */
import { merge } from 'webpack-merge'
import { includedSourcePaths, environmentVariablesFilePathDevelopment } from './constant'
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
  plugins: [getDotenvWebpackStandardSetup({ path: environmentVariablesFilePathDevelopment }), getHotModuleReplacementPluginStandardSetup()],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        include: includedSourcePaths,
        use: [
          'style-loader',
          getCSSLoaderStandardSetup({ sourceMap: false, modules: { localIdentName: '[name]_[local]_[hash:base64:5]' } }),
          getPostCSSLoaderStandardSetup(),
          getSassLoaderStandardSetup({ includedSourcePaths }),
        ],
      },
    ],
  },
})
