// https://github.com/webpack-contrib/css-loader

export function getCSSLoaderStandardSetup() {
  return {
    loader: 'css-loader',
    options: {
      importLoaders: 2,
      sourceMap: true,
      modules: {
        localIdentName: '[name]_[local]_[hash:base64:5]',
      },
    },
  }
}
