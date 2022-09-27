const path = require('path')

module.exports = {
  // Source files
  node: path.resolve(__dirname, './node_modules'),

  // Source files
  src: path.resolve(__dirname, './src'),

  // Production build files
  build: path.resolve(__dirname, './dist'),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, './public'),
}
