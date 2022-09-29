/* eslint-disable import/no-import-module-exports */

import {
  setupBabelLoaderAdvanced,
  setupCleanWebpackPluginStandard,
  setupCopyWebpackPluginStandard,
  setupDotenvWebpackStandard,
  setupHtmlWebpackPluginAdvanced,
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
    setupCleanWebpackPluginStandard(),
    setupCopyWebpackPluginStandard({ from: paths.public, to: 'assets' }),
    setupDotenvWebpackStandard({ path: './.env.develop' }),
    setupHtmlWebpackPluginAdvanced({
      title: 'Dealer',
      meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      template: 'compile/template.html',
      filename: 'index.html',
      inject: 'body',
      scriptLoading: 'defer',
    }),
  ],
  module: {
    rules: [setupBabelLoaderAdvanced()],
  },

  resolve: {
    modules: [paths.src, paths.node],
    extensions: ['.js', '.jsx', '.json', '.scss'],
  },
}
