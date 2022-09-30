import { merge } from 'webpack-merge'
import { environmentVariablesFilePaths, micrositeFolderPaths, micrositeUrlPaths, banner } from './webpack.constant'
import { webpackCommonSetup } from './webpack.common'
import {
  getCSSLoaderStandardSetup,
  getBannerPluginStandardSetup,
  getCSSMinimizerWebpackPluginStandardSetup,
  getDotenvWebpackStandardSetup,
  MiniCSSExtractPluginLoader,
  getMiniCSSExtractPluginAdvancedSetup,
  getWebpackBundleAnalyzerStandardSetup,
} from '../../../webpack'

export default merge(webpackCommonSetup, {
  mode: 'production',
  devtool: false,
  output: {
    path: micrositeFolderPaths.build,
    publicPath: micrositeUrlPaths.release,
    filename: 'js/[name].[contenthash].bundle.js',
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    minimize: true,
    minimizer: [getCSSMinimizerWebpackPluginStandardSetup(), '...'],
    runtimeChunk: { name: 'runtime' },
  },
  plugins: [
    getBannerPluginStandardSetup(banner),
    getDotenvWebpackStandardSetup({ path: environmentVariablesFilePaths.release }),
    getMiniCSSExtractPluginAdvancedSetup(),
    getWebpackBundleAnalyzerStandardSetup(),
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
