/* eslint-disable import/first */
/* eslint-disable no-console */
if (process.argv[2] === 'prod') {
  console.log('start dev server in prod mode');
  process.env.API_ENV = 'production';
}

/* eslint-disable no-console */
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { generateRoutes, watchRoutes } from './generateRoutes';
import { config } from './dev-config';
import { startProxy } from './proxy';
import webpackConfig from './config/webpack/webpack.dev.conf';

const helpText = `
Example:
yarn start          start dev server and proxy api to local jupyterhub
yarn start prod     start dev server and proxy api to dev.prsdev.club (config.urls.prod)
yarn start noproxy  start dev server (start proxy manually)
`;

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
    writeToDisk: true,
    host: 'localhost',
    sockPort: config.urls.fe.port,
    transportMode: 'ws',
    disableHostCheck: true,
    contentBase: path.join(__dirname, '../public'),
    hot: true,
    stats: 'minimal',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    },
  });

  devServer.listen(config.urls.fe.port);
  const arg = process.argv[2];
  if (!arg) {
    startProxy(false);
  } else if (arg === 'noproxy') {
    console.log('\n no proxy started!');
  } else if (arg === 'prod') {
    startProxy(true);
  } else {
    console.log(helpText);
    console.error(new Error('invalid arguments'));
    process.exit(1);
  }
};

run();
