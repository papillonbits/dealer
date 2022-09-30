// https://webpack.js.org/plugins/banner-plugin/

import webpack from 'webpack'

export function getBannerPluginStandardSetup({ banner, raw, entryOnly, test, include, exclude, footer }) {
  return new webpack.BannerPlugin({ banner, raw, entryOnly, test, include, exclude, footer })
}
