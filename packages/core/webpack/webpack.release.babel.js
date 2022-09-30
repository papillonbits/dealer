import { merge } from 'webpack-merge'
import { environmentVariablesFilePath, micrositeFolderPath, micrositeUrlPath, banner } from './webpack.constant'
import { webpackCommonSetup } from './webpack.common'
import {
  getCSSLoaderStandardSetup,
  getBannerPluginStandardSetup,
  getCSSMinimizerWebpackPluginStandardSetup,
  getDotenvWebpackStandardSetup,
  MiniCSSExtractPluginLoader,
  getMiniCSSExtractPluginAdvancedSetup,
} from '../../../webpack'

export default merge(webpackCommonSetup, {
  mode: 'production',
  devtool: false,
  output: {
    path: micrositeFolderPath.build,
    publicPath: micrositeUrlPath.release,
    filename: 'js/[name].[contenthash].bundle.js',
  },
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
  plugins: [
    getBannerPluginStandardSetup(banner),
    getDotenvWebpackStandardSetup({ path: environmentVariablesFilePath.release }),
    getMiniCSSExtractPluginAdvancedSetup(),
  ],
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
})
