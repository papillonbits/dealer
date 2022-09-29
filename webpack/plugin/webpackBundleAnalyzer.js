// https://github.com/webpack-contrib/webpack-bundle-analyzer

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function setupWebpackBundleAnalyzerStandard() {
  return new BundleAnalyzerPlugin()
}
