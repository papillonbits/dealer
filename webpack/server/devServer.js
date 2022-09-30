// https://webpack.js.org/configuration/dev-server/

export function getDevServerStandardSetup() {
  return {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  }
}
