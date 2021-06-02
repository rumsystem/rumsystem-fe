const os = require('os');
const TerserPlugin = require('terser-webpack-plugin');
const config = require('./webpack.base.conf');

process.env.NODE_ENV = 'production';

config.output
  .filename('[name].[contenthash:8].js')
  .chunkFilename('[name].[contenthash:8].js');

// TODO: cdn
// if (process.env.HUB_BUILD_ENV === 'prod') {
//   config.output.publicPath('');
// }

config.performance.maxEntrypointSize((1024 ** 2) * 5);
config.performance.maxAssetSize((1024 ** 2) * 5);

config.optimization.minimizer('terser')
  .use(TerserPlugin, [{
    extractComments: false,
    parallel: Math.min(4, os.cpus().length - 1),
    terserOptions: {
      output: {
        comments: false,
      },
    },
  }]);

config.mode('production');
config.devtool('source-map');

module.exports = config;
