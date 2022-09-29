const path = require('path')

export const compileFolderPath = path.resolve(__dirname, '../compile')
export const nodeModulesFolderPath = path.resolve(__dirname, '../../../node_modules')
export const srcFolderPath = path.resolve(__dirname, '../src')
export const buildFolderPath = path.resolve(__dirname, '../build')
export const publicFolderPath = path.resolve(__dirname, '../public')

export const includedSourcePaths = [
  srcFolderPath,
  `${nodeModulesFolderPath}/@papillonbits/components/build`,
  `${nodeModulesFolderPath}/@papillonbits/css/build`,
]
