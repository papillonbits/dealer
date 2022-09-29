/* eslint-disable import/no-import-module-exports */
import { merge } from 'webpack-merge'
import { nodeModulesFolderPath, srcFolderPath } from './constant'
import { getSVGRWebpackLoaderAdvancedSetup } from '../../../webpack'
import { webpackCommonSetup } from './webpack.common'

module.exports = merge(webpackCommonSetup, {
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
      getSVGRWebpackLoaderAdvancedSetup(),
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
