/* eslint-disable import/no-import-module-exports */
import { nodeModulesFolderPath, srcFolderPath } from './constant'

const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ['@svgr/webpack'],
      },
      {
        // test: /\.s[ac]ss$/i,
        test: /\.(sass|scss|css)$/,
        // include: [paths.node, paths.src],
        include: [
          srcFolderPath,
          `${nodeModulesFolderPath}/@papillonbits/components/build`,
          `${nodeModulesFolderPath}/@papillonbits/css/build`,
        ],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                sourceMap: true,
                plugins: () => ['postcss-preset-env'],
                parser: 'postcss-scss',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                indentWidth: 4,
                // implementation: require('node-sass'), // eslint-disable-line
                // includePaths: [paths.node, paths.src],
                includePaths: [
                  srcFolderPath,
                  `${nodeModulesFolderPath}/@papillonbits/components/build`,
                  `${nodeModulesFolderPath}/@papillonbits/css/build`,
                ],
              },
            },
          },
        ],
      },
    ],
  },
})
