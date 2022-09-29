const path = require('path')

module.exports = {
  compile: path.resolve(__dirname, '../compile'),
  node: path.resolve(__dirname, '../../../node_modules'),
  src: path.resolve(__dirname, '../src'),
  build: path.resolve(__dirname, '../dist'),
  public: path.resolve(__dirname, '../public'),
}
