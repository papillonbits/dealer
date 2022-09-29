// https://github.com/johnagan/clean-webpack-plugin

import { CleanWebpackPlugin } from 'clean-webpack-plugin'

export function setupCleanWebpackPluginStandard() {
  return new CleanWebpackPlugin()
}

export function setupCleanWebpackPluginAdvanced({
  dry,
  verbose,
  cleanStaleWebpackAssets,
  protectWebpackAssets,
  cleanOnceBeforeBuildPatterns,
  cleanAfterEveryBuildPatterns,
  dangerouslyAllowCleanPatternsOutsideProject,
}) {
  return new CleanWebpackPlugin({
    dry,
    verbose,
    cleanStaleWebpackAssets,
    protectWebpackAssets,
    cleanOnceBeforeBuildPatterns,
    cleanAfterEveryBuildPatterns,
    dangerouslyAllowCleanPatternsOutsideProject,
  })
}
