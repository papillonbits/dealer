// https://github.com/gregberge/svgr/tree/main/packages/webpack

export function getSVGRWebpackLoaderStandardSetup() {
  return {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }
}

export function getSVGRWebpackLoaderAdvancedSetup() {
  return {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    resourceQuery: { not: [/url/] },
    use: ['@svgr/webpack'],
  }
}
