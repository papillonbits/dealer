import { merge } from 'webpack-merge'
import { environmentVariablesFilePaths, micrositeFolderPaths, micrositeUrlPaths, includedSourceFilePaths } from './webpack.constant'
import { webpackCommonSetup } from './webpack.common'
import { getWebpackDevelopmentSetup } from '../../../webpack'

export default merge(
  webpackCommonSetup,
  getWebpackDevelopmentSetup({
    environmentVariablesFilePaths,
    micrositeFolderPaths,
    micrositeUrlPaths,
    includedSourceFilePaths,
  }),
)
