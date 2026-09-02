import path from 'path'
import packageJSON from '../../../package.json' with { type: 'json' }

export const environmentVariablesFilePaths = {
  development: path.resolve(import.meta.dirname, '../.env.develop'),
  test: path.resolve(import.meta.dirname, '../.env.test'),
  acceptance: path.resolve(import.meta.dirname, '../.env.acceptance'),
  release: path.resolve(import.meta.dirname, '../.env.release'),
}

export const micrositeUrlPaths = {
  development: '/',
  test: `/${packageJSON.name}/`,
  acceptance: `/${packageJSON.name}/`,
  release: `/${packageJSON.name}/`,
}

export const micrositeFolderPaths = {
  build: path.resolve(import.meta.dirname, '../build'),
  webpack: path.resolve(import.meta.dirname, '../webpack'),
  nodeModules: path.resolve(import.meta.dirname, '../../../node_modules'),
  public: path.resolve(import.meta.dirname, '../public'),
  src: path.resolve(import.meta.dirname, '../src'),
}

export const includedSourceFilePaths = [
  micrositeFolderPaths.src,
  `${micrositeFolderPaths.nodeModules}/@papillonbits/components/build`,
  `${micrositeFolderPaths.nodeModules}/@papillonbits/css/build`,
]
