/* eslint-disable import/first */
/* eslint-disable no-console */
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { generateRoutes, watchRoutes } from './generateRoutes';
import { config } from './dev-config';
import webpackConfig from './config/webpack/webpack.dev.conf';

const run = async () => {
  webpackConfig.plugin('react-fast-refresh').tap((options: any) => {
    options[0].overlay.sockPort = config.urls.fe.port;
    return options;
  });

  await generateRoutes();
  watchRoutes();

  const compiler = webpack(webpackConfig.toConfig());
  const devServer = new WebpackDevServer(compiler, {
    https: false,
    host: 'localhost',
    port: config.urls.fe.port,
    webSocketServer: 'ws',
    allowedHosts: 'all',
    hot: true,
    client: {
      webSocketURL: {
        port: config.urls.fe.port,
      },
    },
    devMiddleware: {
      stats: 'minimal',
      writeToDisk: true,
    },
    static: {
      directory: path.join(__dirname, '../public'),
    },
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    },
  });

  devServer.start();
};

run();
