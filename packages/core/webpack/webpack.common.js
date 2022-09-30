import { micrositeFolderPaths, resolvedModules, resolvedExtensions } from './webpack.constant'
import { getWebpackCommonSetup } from '../../../webpack'

export const webpackCommonSetup = getWebpackCommonSetup({ micrositeFolderPaths, resolvedModules, resolvedExtensions })
