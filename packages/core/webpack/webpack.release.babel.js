import { getWebpackProductionSetup } from '@papillonbits/library/webpack'
import { merge } from 'webpack-merge'
import { environmentVariablesFilePaths, micrositeFolderPaths, micrositeUrlPaths } from './webpack.constant'
import { webpackCommonSetup } from './webpack.common'
import packageJSON from '../package.json'

export default merge(
  webpackCommonSetup,
  getWebpackProductionSetup({
    environmentVariablesFilePath: environmentVariablesFilePaths.release,
    micrositeUrlPath: micrositeUrlPaths.release,
    micrositeFolderPaths,
    packageJSON,
  }),
)