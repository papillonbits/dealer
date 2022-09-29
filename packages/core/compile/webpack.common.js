/* eslint-disable import/no-import-module-exports */

import {
  setupCleanWebpackPluginStandard,
  setupCopyWebpackPluginStandard,
  setupDotenvWebpackStandard,
  // setupWebpackBundleAnalyzerStandard,
} from '../../../webpack/plugin'

const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')
const pkg = require('../package.json')

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
    // setupWebpackBundleAnalyzerStandard(),
    new HtmlWebpackPlugin({
      title: 'Dealer',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      // favicon: `${paths.src}/images/favicon.png`,
      template: 'compile/template.html',
      filename: 'index.html',
      inject: 'body',
      scriptLoading: 'defer',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: false,
                  useBuiltIns: 'entry',
                  corejs: '3.25.2',
                  targets: {
                    browsers: Object.values(pkg.browserslist.legacyBrowsers),
                  },
                },
              ],
              '@babel/preset-react',
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-nullish-coalescing-operator',
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-optional-catch-binding',
              '@babel/plugin-proposal-optional-chaining',
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-transform-classes',
              [
                '@babel/plugin-transform-react-jsx',
                {
                  runtime: 'automatic',
                },
              ],
              '@babel/plugin-transform-runtime',
              '@babel/plugin-transform-spread',
              'syntax-async-functions',
            ],
          },
        },
      },

      // Images: Copy image files to build folder
      // { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      // { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
      // { test: /\.(woff(2)?|eot|ttf|otf|)$/, type: 'asset/inline' },

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
