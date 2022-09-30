import { merge } from 'webpack-merge'
import { environmentVariablesFilePath, micrositeFolderPath, micrositeUrlPath, includedSourceFilePaths } from './webpack.constant'
import { webpackCommonSetup } from './webpack.common'
import {
  getCSSLoaderStandardSetup,
  getPostCSSLoaderStandardSetup,
  getSassLoaderStandardSetup,
  getDotenvWebpackStandardSetup,
  getHotModuleReplacementPluginStandardSetup,
  getDevServerStandardSetup,
} from '../../../webpack'

export default merge(webpackCommonSetup, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: { path: micrositeFolderPath.build, publicPath: micrositeUrlPath.development, filename: '[name].bundle.js' },
  devServer: getDevServerStandardSetup(),
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
