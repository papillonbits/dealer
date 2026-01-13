#!/bin/bash

# Uninstall production dependencies
npm un \
  @papillonbits/components \
  @papillonbits/library \
  @papillonbits/setup \
  @primer/primitives \
  @primer/view-components \
  classnames \
  prop-types \
  react \
  react-dom \
  react-redux \
  react-router \
  react-router-dom \
  redux \
  redux-logger \
  redux-mock-store \
  redux-thunk \
  uuid \
  whatwg-fetch

# Uninstall development dependencies
npm un \
  @axe-core/react \
  @babel/core \
  @babel/eslint-parser \
  @babel/plugin-transform-react-jsx \
  @babel/plugin-transform-runtime \
  @babel/preset-env \
  @babel/preset-react \
  @babel/register \
  @babel/runtime \
  @chromatic-com/storybook \
  @storybook/addon-a11y \
  @storybook/addon-docs \
  @storybook/addon-jest \
  @storybook/addon-links \
  @storybook/addon-styling-webpack \
  @storybook/addon-themes \
  @storybook/react-webpack5 \
  @svgr/webpack \
  @testing-library/dom @testing-library/react \
  ajv \
  babel-core \
  babel-jest \
  babel-loader \
  babel-plugin-css-modules-transform \
  babel-plugin-syntax-async-functions \
  babel-plugin-transform-assets \
  clean-webpack-plugin \
  codecov \
  copy-webpack-plugin \
  css-loader \
  css-minimizer-webpack-plugin \
  dotenv \
  dotenv-cli \
  dotenv-webpack \
  eslint \
  eslint-config-airbnb \
  eslint-config-prettier \
  eslint-import-resolver-alias \
  eslint-plugin-import \
  eslint-plugin-jest \
  eslint-plugin-jsx-a11y \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  file-loader \
  gh-pages \
  html-loader \
  html-webpack-plugin \
  husky \
  identity-obj-proxy \
  jest \
  jest-axe \
  jsdom \
  jsdom-global \
  lerna \
  lint-staged \
  markdown-loader \
  mini-css-extract-plugin \
  nodemon \
  npm-run-all \
  path \
  postcss \
  postcss-loader \
  postcss-preset-env \
  postcss-scss \
  prettier \
  process \
  regenerator-runtime \
  sass \
  sass-loader \
  storybook \
  style-loader \
  stylelint \
  stylelint-config-standard \
  stylelint-order \
  stylelint-prettier \
  stylelint-scss \
  tty-browserify \
  url-loader \
  webpack \
  webpack-bundle-analyzer \
  webpack-cli \
  webpack-dev-server \
  webpack-manifest-plugin

# Reinstall production dependencies
npm i -S \
  @papillonbits/components \
  @papillonbits/library \
  @papillonbits/setup \
  @primer/primitives \
  @primer/view-components \
  classnames \
  prop-types \
  react \
  react-dom \
  react-redux \
  react-router \
  react-router-dom \
  redux \
  redux-logger \
  redux-mock-store \
  redux-thunk \
  uuid \
  whatwg-fetch

# Reinstall development dependencies with compatible versions
npm i -D \
  @axe-core/react \
  @babel/core \
  @babel/eslint-parser \
  @babel/plugin-transform-react-jsx \
  @babel/plugin-transform-runtime \
  @babel/preset-env \
  @babel/preset-react \
  @babel/register \
  @babel/runtime \
  @chromatic-com/storybook@^4.1.3 \
  @storybook/addon-a11y@^9.1.17 \
  @storybook/addon-docs@^9.1.17 \
  @storybook/addon-jest \
  @storybook/addon-links@^9.1.17 \
  @storybook/addon-styling-webpack@^2.0.0 \
  @storybook/addon-themes@^9.1.17 \
  @storybook/react-webpack5@^9.1.17 \
  @svgr/webpack \
  @testing-library/dom @testing-library/react \
  ajv \
  babel-core@^7.0.0-bridge.0 \
  babel-jest \
  babel-loader \
  babel-plugin-css-modules-transform \
  babel-plugin-syntax-async-functions \
  babel-plugin-transform-assets \
  clean-webpack-plugin \
  codecov \
  copy-webpack-plugin \
  css-loader \
  css-minimizer-webpack-plugin \
  dotenv \
  dotenv-cli \
  dotenv-webpack \
  eslint@^8.57.1 \
  eslint-config-airbnb \
  eslint-config-prettier \
  eslint-import-resolver-alias \
  eslint-plugin-import \
  eslint-plugin-jest \
  eslint-plugin-jsx-a11y \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  file-loader \
  gh-pages \
  html-loader \
  html-webpack-plugin \
  husky \
  identity-obj-proxy \
  jest \
  jest-axe \
  jsdom \
  jsdom-global \
  lerna \
  lint-staged \
  markdown-loader \
  mini-css-extract-plugin \
  nodemon \
  npm-run-all \
  path \
  postcss \
  postcss-loader \
  postcss-preset-env \
  postcss-scss \
  prettier \
  process \
  regenerator-runtime \
  sass \
  sass-loader \
  storybook@^9.1.17 \
  style-loader \
  stylelint \
  stylelint-config-standard \
  stylelint-order \
  stylelint-prettier \
  stylelint-scss \
  tty-browserify \
  url-loader \
  webpack \
  webpack-bundle-analyzer \
  webpack-cli \
  webpack-dev-server \
  webpack-manifest-plugin

# Run cleanup and bootstrap
npm run clean-up && \
npm run install-packages && \
npm run bootstrap-release
