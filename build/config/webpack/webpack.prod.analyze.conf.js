const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');

const config = require('./webpack.prod.conf');

config.plugin('BundleAnalyzerPlugin').use(BundleAnalyzerPlugin, [{
  analyzerMode: 'static',
}]);
config.plugin('SpeedMeasurePlugin').use(SpeedMeasurePlugin, [{
  outputFormat: 'humanVerbose',
  loaderTopFiles: 10,
}]);
config.plugin('StatsPlugin').use(StatsPlugin, [
  'stats.json',
  { chunkModules: true },
]);

config.plugin('duplicate-package-checker-webpack-plugin')
  .use(DuplicatePackageCheckerPlugin);

if (process.env.cat === 'false') {
  config.optimization.concatenateModules(false);
}

module.exports = config;
