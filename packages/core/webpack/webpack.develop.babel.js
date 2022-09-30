import { merge } from 'webpack-merge'
import { environmentVariablesFilePath, includedSourceFilePaths } from './webpack.constant'
import { webpackCommonSetup } from './webpack.common'
import {
  getCSSLoaderStandardSetup,
  getPostCSSLoaderStandardSetup,
  getSassLoaderStandardSetup,
  getDotenvWebpackStandardSetup,
  getHotModuleReplacementPluginStandardSetup,
} from '../../../webpack'

export default merge(webpackCommonSetup, {
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
