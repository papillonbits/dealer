import path from 'path'
import packageJSON from '../package.json'

export const environmentVariablesFilePaths = {
  development: path.resolve(__dirname, '../.env.develop'),
  test: path.resolve(__dirname, '../.env.test'),
  acceptance: path.resolve(__dirname, '../.env.acceptance'),
  release: path.resolve(__dirname, '../.env.release'),
}

export const micrositeFolderPaths = {
  build: path.resolve(__dirname, '../build'),
  webpack: path.resolve(__dirname, '../webpack'),
  nodeModules: path.resolve(__dirname, '../../../node_modules'),
  public: path.resolve(__dirname, '../public'),
  src: path.resolve(__dirname, '../src'),
}

export const micrositeUrlPaths = {
  development: '/',
  test: '/dealer/',
  acceptance: '/dealer/',
  release: '/dealer/',
}

export const includedSourceFilePaths = [
  micrositeFolderPaths.src,
  `${micrositeFolderPaths.nodeModules}/@papillonbits/components/build`,
  `${micrositeFolderPaths.nodeModules}/@papillonbits/css/build`,
]

export const resolvedModules = [micrositeFolderPaths.src, micrositeFolderPaths.nodeModules]

export const resolvedExtensions = ['.js', '.jsx', '.json', '.scss']

export const banner = {
  banner: [
    '/*!',
    ` * @project        ${packageJSON.name}`,
    ' * @name           [filebase]',
    ` * @author         ${packageJSON.author.name}`,
    ` * @copyright      Copyright (c) ${new Date().getFullYear()} ${packageJSON.author.name}`,
    ' */',
    '',
  ].join('\n'),
  raw: true,
}
