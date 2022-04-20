const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.base.conf');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

process.env.NODE_ENV = 'development';

const resolve = (dir) => path.join(__dirname, '../../..', dir);

config.target('web');
config.mode('development');
config.devtool(false);
config.plugin('sourcemap')
  .use(webpack.EvalSourceMapDevToolPlugin, [{
    exclude: [
      /tailwind\.sass$/,
      /global\.sass$/,
      /\.css$/,
      // exclude source map from some big and unimportant package
      // for less memory usage and faster build time
      /node_modules/,
    ],
  }]);

config.plugin('fork-ts-checker-webpack-plugin')
  .use(ForkTsCheckerWebpackPlugin, [{
    typescript: {
      configFile: resolve('tsconfig.json'),
      diagnosticOptions: {
        semantic: true,
        syntactic: true,
      },
    },
  }]);

config.plugin('react-fast-refresh')
  .use(ReactRefreshWebpackPlugin, [{
    overlay: {
      sockPort: 0,
    },
  }]);

module.exports = config;
