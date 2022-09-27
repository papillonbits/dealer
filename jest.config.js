module.exports = {
  testMatch: ['**/?(*.)test.js?(x)'],
  testPathIgnorePatterns: process.env.NODE_ENV === 'test' ? ['packages/core/webpack.test.js'] : ['packages/core'],
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
  },
  coverageDirectory: './coverage/',
  collectCoverage: process.env.NODE_ENV === 'test',
  coverageReporters: ['lcov', 'text'],
  collectCoverageFrom: [
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
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/.mock/file.js',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'jsx'],
  coverageThreshold: {
    global: {
      statements: 86,
      branches: 55,
      functions: 86,
      lines: 84,
    },
  },
  preset: process.env.NODE_ENV === 'test' ? null : 'jest-puppeteer',
}
