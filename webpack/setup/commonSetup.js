import { getBabelLoaderAdvancedSetup } from '../loader/babelLoader'
import { getFontLoaderStandardSetup } from '../loader/fontLoader'
import { getImageLoaderStandardSetup } from '../loader/imageLoader'
import { getSVGRLoaderAdvancedSetup } from '../loader/svgrLoader'
import { getMarkdownLoaderStandardSetup } from '../loader/markdownLoader'
import { getCleanWebpackPluginStandardSetup } from '../plugin/cleanWebpackPlugin'
import { getCopyWebpackPluginStandardSetup } from '../plugin/copyWebpackPlugin'
import { getHtmlWebpackPluginStandardSetup } from '../plugin/htmlWebpackPlugin'
import { getWebpackManifestPluginStandardSetup } from '../plugin/webpackManifestPlugin'

export function getWebpackCommonSetup({ micrositeFolderPaths, resolvedModules, resolvedExtensions }) {
  return {
    entry: [`${micrositeFolderPaths.src}/index.js`],
    plugins: [
      getCleanWebpackPluginStandardSetup(),
      getCopyWebpackPluginStandardSetup({ from: micrositeFolderPaths.public, to: 'assets' }),
      getHtmlWebpackPluginStandardSetup({ title: 'Dealer', micrositeWebpackFolderPath: micrositeFolderPaths.webpack }),
      getWebpackManifestPluginStandardSetup(),
    ],
    module: {
      rules: [
        getBabelLoaderAdvancedSetup(),
        getFontLoaderStandardSetup(),
        getImageLoaderStandardSetup(),
        getMarkdownLoaderStandardSetup(),
        getSVGRLoaderAdvancedSetup(),
      ],
    },

    resolve: {
      modules: resolvedModules,
      extensions: resolvedExtensions,
    },
  }
}
