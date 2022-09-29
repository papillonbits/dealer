/* eslint-disable import/no-import-module-exports */

import {
  setupBabelLoaderAdvanced,
  setupCleanWebpackPluginStandard,
  setupCopyWebpackPluginStandard,
  setupDotenvWebpackStandard,
  setupHtmlWebpackPluginAdvanced,
  // setupWebpackBundleAnalyzerStandard,
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
    // setupWebpackBundleAnalyzerStandard(),
  ],
  module: {
    rules: [
      setupBabelLoaderAdvanced(),
      {
        test: /\.(ttf|eot|woff2?)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash].[ext]',
            },
          },
        ],
      },
    ],
  },

  resolve: {
    modules: [paths.src, paths.node],
    extensions: ['.js', '.jsx', '.json', '.scss'],
  },
}
