const path = require('path')

export const environmentVariablesFilePath = {
  development: path.resolve(__dirname, '../.env.develop'),
  test: path.resolve(__dirname, '../.env.test'),
  acceptance: path.resolve(__dirname, '../.env.acceptance'),
  release: path.resolve(__dirname, '../.env.release'),
}

export const micrositeFolderPath = {
  build: path.resolve(__dirname, '../build'),
  webpack: path.resolve(__dirname, '../webpack'),
  nodeModules: path.resolve(__dirname, '../../../node_modules'),
  public: path.resolve(__dirname, '../public'),
  src: path.resolve(__dirname, '../src'),
}

export const micrositeUrlPath = {
  development: '/',
  test: '/dealer/',
  acceptance: '/dealer/',
  release: '/dealer/',
}

export const includedSourceFilePaths = [
  micrositeFolderPath.src,
  `${micrositeFolderPath.nodeModules}/@papillonbits/components/build`,
  `${micrositeFolderPath.nodeModules}/@papillonbits/css/build`,
]

export const resolvedModules = [micrositeFolderPath.src, micrositeFolderPath.nodeModules]

export const resolvedExtensions = ['.js', '.jsx', '.json', '.scss']
