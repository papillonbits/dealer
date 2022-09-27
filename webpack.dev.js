const { merge } = require('webpack-merge')

const common = require('./webpack.common')

const paths = require('./paths')

// console.log('~mts~', paths) // eslint-disable-line

// console.log('~mts~', [
//   `${paths.src}/**/**/**/**`,
//   `${paths.node}/@papillonbits/components/build/**/**/**`,
//   `${paths.node}/@papillonbits/css/build/**/**/**`,
// ])

// ~mts~ {
//   node: '/Users/mts/PapillonBitsHub/dealer/node_modules',
//   src: '/Users/mts/PapillonBitsHub/dealer/src',
//   build: '/Users/mts/PapillonBitsHub/dealer/dist',
//   public: '/Users/mts/PapillonBitsHub/dealer/public'
// }

const config = merge(common, {
  // Set the mode to development or production
  mode: 'development',

  // Control how source maps are generated
  devtool: 'inline-source-map',

  // Spin up a server for quick development
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
      // Styles: Inject CSS into the head with source maps
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

// console.log('~mts~', JSON.stringify(config)) // eslint-disable-line

module.exports = config
