/* eslint-disable import/first */
/* eslint-disable no-console */
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { config } from './dev-config';
import webpackConfig from './config/webpack/webpack.dev.ssr.conf';

const run = () => {
  const compiler = webpack(webpackConfig.toConfig());
  const devServer = new WebpackDevServer(compiler, {
    https: false,
    hot: false,
    port: config.ssrPort,
    devMiddleware: {
      writeToDisk: true,
    },
  });

  devServer.start();
};

run();
