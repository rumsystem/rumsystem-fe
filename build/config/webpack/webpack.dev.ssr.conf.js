const config = require('./webpack.base.conf');
const nodeExternals = require('webpack-node-externals');

process.env.NODE_ENV = 'development';

config.target('node');
config.externals([nodeExternals()]);
config.mode('development');
config.devtool(false);
config.optimization.splitChunks(false);

// config.plugin('sourcemap')
//   .use(webpack.EvalSourceMapDevToolPlugin, [{
//     exclude: [
//       /tailwind\.sass$/,
//       /global\.sass$/,
//       /\.css$/,
//       // exclude source map from some big and unimportant package
//       // for less memory usage and faster build time
//       /node_modules/,
//     ],
//   }]);

module.exports = config;
