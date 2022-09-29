export { monorepo, microsite, environment } from './constant'
export { getBabelLoaderAdvancedSetup } from './loader/babelLoader'
export { getCSSLoaderStandardSetup } from './loader/cssLoader'
export { getPostCSSLoaderStandardSetup } from './loader/postCSSLoader'
export { getSassLoaderStandardSetup } from './loader/sassLoader'
export { getSVGRWebpackLoaderStandardSetup, getSVGRWebpackLoaderAdvancedSetup } from './loader/svgrWebpack'
export { getCleanWebpackPluginStandardSetup, getCleanWebpackPluginAdvancedSetup } from './plugin/cleanWebpackPlugin'
export { getCopyWebpackPluginStandardSetup } from './plugin/copyWebpackPlugin'
export { getCSSMinimizerWebpackPluginStandardSetup } from './plugin/cssMinimizerWebpackPlugin'
export { getDotenvWebpackStandardSetup, getDotenvWebpackAdvancedSetup } from './plugin/dotenvWebpack'
export { getHtmlWebpackPluginAdvancedSetup } from './plugin/htmlWebpackPlugin'
export {
  MiniCSSExtractPluginLoader,
  getMiniCSSExtractPluginStandardSetup,
  getMiniCSSExtractPluginAdvancedSetup,
} from './plugin/miniCSSExtractPlugin'
export { getWebpackBundleAnalyzerStandardSetup } from './plugin/webpackBundleAnalyzer'
