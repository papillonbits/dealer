import { merge } from 'webpack-merge'
import { environmentVariablesFilePaths, micrositeFolderPaths, micrositeUrlPaths } from './webpack.constant'
import { webpackCommonSetup } from './webpack.common'
import { getWebpackProductionSetup } from '../../../webpack'
import packageJSON from '../package.json'

export default merge(
  webpackCommonSetup,
  getWebpackProductionSetup({
    environmentVariablesFilePath: environmentVariablesFilePaths.test,
    micrositeUrlPath: micrositeUrlPaths.test,
    micrositeFolderPaths,
    packageJSON,
  }),
)
