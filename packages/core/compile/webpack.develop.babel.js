/* eslint-disable import/no-import-module-exports */
import { merge } from 'webpack-merge'
import { nodeModulesFolderPath, srcFolderPath } from './constant'
import { webpackCommonSetup } from './webpack.common'
import { getCSSLoaderStandardSetup, getPostCSSLoaderStandardSetup, getSassLoaderStandardSetup } from '../../../webpack'

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
      {
        test: /\.s[ac]ss$/i,
        include: [
          srcFolderPath,
          `${nodeModulesFolderPath}/@papillonbits/components/build`,
          `${nodeModulesFolderPath}/@papillonbits/css/build`,
        ],
        use: [
          'style-loader',
          getCSSLoaderStandardSetup(),
          getPostCSSLoaderStandardSetup(),
          getSassLoaderStandardSetup({
            includePaths: [
              srcFolderPath,
              `${nodeModulesFolderPath}/@papillonbits/components/build`,
              `${nodeModulesFolderPath}/@papillonbits/css/build`,
            ],
          }),
        ],
      },
    ],
  },
})
