// https://github.com/jantimon/html-webpack-plugin

import HtmlWebpackPlugin from 'html-webpack-plugin'

export function getHtmlWebpackPluginAdvancedSetup({ title, meta, template, filename, inject, scriptLoading }) {
  return new HtmlWebpackPlugin({
    title,
    meta,
    template,
    filename,
    inject,
    scriptLoading,
  })
}
