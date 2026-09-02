import { getWebpackDevelopmentSetup } from '@papillonbits/setup/webpack/index.js'
import { environmentVariablesFilePaths, micrositeFolderPaths, micrositeUrlPaths, includedSourceFilePaths } from './webpack.constant.js'
import { webpackCommonSetup } from './webpack.common.js'

export default getWebpackDevelopmentSetup({
  webpackCommonSetup,
  environmentVariablesFilePath: environmentVariablesFilePaths.development,
  micrositeUrlPath: micrositeUrlPaths.development,
  micrositeFolderPaths,
  includedSourceFilePaths,
})
