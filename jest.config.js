// https://docs.codecov.com/docs/codecov-uploader
/* eslint-disable prefer-destructuring */
const getJestSetup = require('@papillonbits/library/jest').getJestSetup

const testPathIgnorePatterns = process.env.NODE_ENV === 'test' ? ['packages/core/webpack/webpack.test.babel.js'] : ['packages/core']
const coverageDirectory = './.coverage/'
const collectCoverage = process.env.NODE_ENV === 'test'
const collectCoverageFrom = [
  '!**/coverage/**',
  '!**/node_modules/**',
  'packages/**/*.{js,jsx}',
  '!packages/**/index.js',
  '!packages/**/*.prop.js',
  '!packages/**/*.story.js',
  '!packages/**/*.test.js',
  '!packages/**/build/**',
  '!packages/**/node_modules/**',
  '!packages/**/webpack*',
  '!packages/core/src/library/**',
  '!packages/core/src/state/**',
  '!packages/core/src/store/reducer/**',
  '!packages/core/src/store/thunk/**',
  '!packages/docs/**',
  '!packages/e2e/**',
]
const coverageThreshold = {
  global: {
    statements: 87,
    branches: 55,
    functions: 86,
    lines: 85,
  },
}

module.exports = getJestSetup({ testPathIgnorePatterns, coverageDirectory, collectCoverage, collectCoverageFrom, coverageThreshold })
