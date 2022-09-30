import { merge } from 'webpack-merge'
import { environmentVariablesFilePaths, micrositeFolderPaths, micrositeUrlPaths, includedSourceFilePaths } from './webpack.constant'
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
  devServer: getDevServerStandardSetup(),
  output: { path: micrositeFolderPaths.build, publicPath: micrositeUrlPaths.development, filename: '[name].bundle.js' },
  optimization: {
    concatenateModules: true,
  },
  plugins: [
    getDotenvWebpackStandardSetup({ path: environmentVariablesFilePaths.development }),
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
