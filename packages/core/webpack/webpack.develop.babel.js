import { getWebpackDevelopmentSetup } from '@papillonbits/library/webpack'
import { merge } from 'webpack-merge'
import { environmentVariablesFilePaths, micrositeFolderPaths, micrositeUrlPaths, includedSourceFilePaths } from './webpack.constant'
import { webpackCommonSetup } from './webpack.common'

export default merge(
  webpackCommonSetup,
  getWebpackDevelopmentSetup({
    environmentVariablesFilePath: environmentVariablesFilePaths.development,
    micrositeUrlPath: micrositeUrlPaths.development,
    micrositeFolderPaths,
    includedSourceFilePaths,
  }),
)
