export { monorepo, microsite, environment } from './constant'
export { getBabelLoaderAdvancedSetup } from './loader/babelLoader'
export { getCSSLoaderStandardSetup } from './loader/cssLoader'
export { getFontLoaderStandardSetup } from './loader/fontLoader'
export { getImageLoaderStandardSetup } from './loader/imageLoader'
export { getMarkdownLoaderStandardSetup } from './loader/markdownLoader'
export { getPostCSSLoaderStandardSetup } from './loader/postCSSLoader'
export { getSassLoaderStandardSetup } from './loader/sassLoader'
export { getSVGRLoaderStandardSetup, getSVGRLoaderAdvancedSetup } from './loader/svgrLoader'
export { getCleanWebpackPluginStandardSetup, getCleanWebpackPluginAdvancedSetup } from './plugin/cleanWebpackPlugin'
export { getCopyWebpackPluginStandardSetup } from './plugin/copyWebpackPlugin'
export { getCSSMinimizerWebpackPluginStandardSetup } from './plugin/cssMinimizerWebpackPlugin'
export { getDotenvWebpackStandardSetup, getDotenvWebpackAdvancedSetup } from './plugin/dotenvWebpack'
export { getHotModuleReplacementPluginStandardSetup } from './plugin/hotModuleReplacementPlugin'
export { getHtmlWebpackPluginStandardSetup, getHtmlWebpackPluginAdvancedSetup } from './plugin/htmlWebpackPlugin'
export {
  MiniCSSExtractPluginLoader,
  getMiniCSSExtractPluginStandardSetup,
  getMiniCSSExtractPluginAdvancedSetup,
} from './plugin/miniCSSExtractPlugin'
export { getWebpackBundleAnalyzerStandardSetup } from './plugin/webpackBundleAnalyzer'
export { getWebpackManifestPluginStandardSetup } from './plugin/webpackManifestPlugin'
export { getDevServerStandardSetup } from './server/devServer'
