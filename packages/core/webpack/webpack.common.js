import { micrositeFolderPaths } from './webpack.constant'
import { getWebpackCommonSetup } from '../../../webpack'
import packageJSON from '../package.json'

export const webpackCommonSetup = getWebpackCommonSetup({ micrositeFolderPaths, packageJSON })
