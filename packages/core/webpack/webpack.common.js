import { getWebpackCommonSetup } from '@papillonbits/setup/webpack/index.js'
import { micrositeFolderPaths } from './webpack.constant.js'
import packageJSON from '../../../package.json' with { type: 'json' }

export const webpackCommonSetup = getWebpackCommonSetup({ micrositeFolderPaths, packageJSON })
