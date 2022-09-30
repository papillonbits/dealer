import { micrositeFolderPaths, resolvedModules, resolvedExtensions } from './webpack.constant'

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
  entry: [`${micrositeFolderPaths.src}/index.js`],
  plugins: [
    getCleanWebpackPluginStandardSetup(),
    getCopyWebpackPluginStandardSetup({ from: micrositeFolderPaths.public, to: 'assets' }),
    getDotenvWebpackStandardSetup({ path: './.env.develop' }),
    getHtmlWebpackPluginStandardSetup({ title: 'Dealer', micrositeWebpackFolderPath: micrositeFolderPaths.webpack }),
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
