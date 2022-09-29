import { compileFolderPath, nodeModulesFolderPath, srcFolderPath, buildFolderPath, publicFolderPath } from './constant'

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
  entry: [`${srcFolderPath}/index.js`],
  output: { path: buildFolderPath, filename: '[name].bundle.js', publicPath: '/' },
  plugins: [
    getCleanWebpackPluginStandardSetup(),
    getCopyWebpackPluginStandardSetup({ from: publicFolderPath, to: 'assets' }),
    getDotenvWebpackStandardSetup({ path: './.env.develop' }),
    getHtmlWebpackPluginStandardSetup({ title: 'Dealer', compileFolderPath }),
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
    modules: [srcFolderPath, nodeModulesFolderPath],
    extensions: ['.js', '.jsx', '.json', '.scss'],
  },
}
