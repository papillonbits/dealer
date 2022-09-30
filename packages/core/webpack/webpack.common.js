import { micrositeFolderPath, resolvedModules, resolvedExtensions } from './webpack.constant'

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
  plugins: [
    getCleanWebpackPluginStandardSetup(),
    getCopyWebpackPluginStandardSetup({ from: micrositeFolderPath.public, to: 'assets' }),
    getDotenvWebpackStandardSetup({ path: './.env.develop' }),
    getHtmlWebpackPluginStandardSetup({ title: 'Dealer', micrositeWebpackFolderPath: micrositeFolderPath.webpack }),
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
    modules: resolvedModules,
    extensions: resolvedExtensions,
  },
}
