import { merge } from 'webpack-merge'
import { environmentVariablesFilePaths, micrositeFolderPaths, micrositeUrlPaths, banner } from './webpack.constant'
import { webpackCommonSetup } from './webpack.common'
import { getWebpackProductionSetup } from '../../../webpack'

export default merge(
  webpackCommonSetup,
  getWebpackProductionSetup({
    environmentVariablesFilePaths,
    micrositeFolderPaths,
    micrositeUrlPaths,
    banner,
  }),
)
