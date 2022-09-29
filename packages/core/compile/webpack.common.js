import { micrositeFolderPath } from './constant'

import {
  getBabelLoaderAdvancedSetup,
  getFontLoaderStandardSetup,
  getImageLoaderStandardSetup,
  getSVGRLoaderAdvancedSetup,
  getMarkdownLoaderStandardSetup,
  getCleanWebpackPluginStandardSetup,
  getCopyWebpackPluginStandardSetup,
  getDotenvWebpackStandardSetup,
  getHtmlWebpackPluginStandardSetup,
  getWebpackManifestPluginStandardSetup,
} from '../../../webpack'

export const webpackCommonSetup = {
  entry: [`${micrositeFolderPath.src}/index.js`],
  output: { path: micrositeFolderPath.build, filename: '[name].bundle.js', publicPath: '/' },
  plugins: [
    getCleanWebpackPluginStandardSetup(),
    getCopyWebpackPluginStandardSetup({ from: micrositeFolderPath.public, to: 'assets' }),
    getDotenvWebpackStandardSetup({ path: './.env.develop' }),
    getHtmlWebpackPluginStandardSetup({ title: 'Dealer', micrositeCompileFolderPath: micrositeFolderPath.compile }),
    getWebpackManifestPluginStandardSetup(),
  ],
  module: {
    rules: [
      getBabelLoaderAdvancedSetup(),
      getFontLoaderStandardSetup(),
      getImageLoaderStandardSetup(),
      getMarkdownLoaderStandardSetup(),
      getSVGRLoaderAdvancedSetup(),
    ],
  },

  resolve: {
    modules: [micrositeFolderPath.src, micrositeFolderPath.nodeModules],
    extensions: ['.js', '.jsx', '.json', '.scss'],
  },
}
