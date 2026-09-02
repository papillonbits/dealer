import { getWebpackProductionSetup } from '@papillonbits/setup/webpack/index.js'
import { environmentVariablesFilePaths, micrositeFolderPaths, micrositeUrlPaths } from './webpack.constant.js'
import { webpackCommonSetup } from './webpack.common.js'
import packageJSON from '../../../package.json' with { type: 'json' }

export default getWebpackProductionSetup({
  webpackCommonSetup,
  environmentVariablesFilePath: environmentVariablesFilePaths.acceptance,
  micrositeUrlPath: micrositeUrlPaths.acceptance,
  micrositeFolderPaths,
  packageJSON,
})
