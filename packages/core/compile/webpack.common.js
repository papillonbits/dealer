import { compileFolderPath, nodeModulesFolderPath, srcFolderPath, buildFolderPath, publicFolderPath } from './constant'

import {
  getBabelLoaderAdvancedSetup,
  getSVGRWebpackLoaderAdvancedSetup,
  getCleanWebpackPluginStandardSetup,
  getCopyWebpackPluginStandardSetup,
  getDotenvWebpackStandardSetup,
  getHtmlWebpackPluginAdvancedSetup,
} from '../../../webpack'

export const webpackCommonSetup = {
  entry: [`${srcFolderPath}/index.js`],
  output: {
    path: buildFolderPath,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [
    getCleanWebpackPluginStandardSetup(),
    getCopyWebpackPluginStandardSetup({ from: publicFolderPath, to: 'assets' }),
    getDotenvWebpackStandardSetup({ path: './.env.develop' }),
    getHtmlWebpackPluginAdvancedSetup({
      title: 'Dealer',
      meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      template: `${compileFolderPath}/index.html`,
      filename: 'index.html',
      inject: 'body',
      scriptLoading: 'defer',
    }),
  ],
  module: {
    rules: [getBabelLoaderAdvancedSetup(), getSVGRWebpackLoaderAdvancedSetup()],
  },

  resolve: {
    modules: [srcFolderPath, nodeModulesFolderPath],
    extensions: ['.js', '.jsx', '.json', '.scss'],
  },
}
