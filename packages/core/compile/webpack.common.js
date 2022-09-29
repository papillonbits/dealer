/* eslint-disable import/no-import-module-exports */

import {
  getBabelLoaderAdvancedSetup,
  getCleanWebpackPluginStandardSetup,
  getCopyWebpackPluginStandardSetup,
  getDotenvWebpackStandardSetup,
  getHtmlWebpackPluginAdvancedSetup,
} from '../../../webpack'

const paths = require('./paths')

module.exports = {
  entry: [`${paths.src}/index.js`],
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [
    getCleanWebpackPluginStandardSetup(),
    getCopyWebpackPluginStandardSetup({ from: paths.public, to: 'assets' }),
    getDotenvWebpackStandardSetup({ path: './.env.develop' }),
    getHtmlWebpackPluginAdvancedSetup({
      title: 'Dealer',
      meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      template: 'compile/template.html',
      filename: 'index.html',
      inject: 'body',
      scriptLoading: 'defer',
    }),
  ],
  module: {
    rules: [getBabelLoaderAdvancedSetup()],
  },

  resolve: {
    modules: [paths.src, paths.node],
    extensions: ['.js', '.jsx', '.json', '.scss'],
  },
}
