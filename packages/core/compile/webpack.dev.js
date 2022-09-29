const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const paths = require('./paths')

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
        include: [paths.src, `${paths.node}/@papillonbits/components/build`, `${paths.node}/@papillonbits/css/build`],
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
                includePaths: [paths.src, `${paths.node}/@papillonbits/components/build`, `${paths.node}/@papillonbits/css/build`],
              },
            },
          },
        ],
      },
    ],
  },
})
