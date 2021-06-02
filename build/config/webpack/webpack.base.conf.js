const os = require('os');
const path = require('path');
const childProcess = require('child_process');
const chalk = require('chalk');
const webpack = require('webpack');
const Config = require('webpack-chain');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const workers = Math.min(2, os.cpus().length - 1);
const resolve = (dir) => path.join(__dirname, '../../..', dir);

const config = new Config();

const createCssRule = (name, test) => config.module.rule(name)
  .test(test)
  .use('thread-loader')
  .loader('thread-loader')
  .options({ workers })
  .end()
  .use('style-loader')
  .loader('style-loader')
  .end()
  .use('css-loader')
  .loader('css-loader')
  .end()
  .use('scoped-css-loader')
  .loader('scoped-css-loader')
  .end()
  .use('postcss-loader')
  .loader('postcss-loader')
  .end();

config.mode('none');

config.context(resolve('.'));

config.entry('index')
  .add(resolve('./src/index.ts'));

config.output
  .path(resolve('dist'))
  .filename('[name].js')
  .set('assetModuleFilename', 'static/[name].[contenthash:8][ext]')
  .publicPath('/')
  .set('uniqueName', 'rumsystem');

config.resolve.extensions
  .clear()
  .merge(['.ts', '.tsx', '.js']);

config.resolve.symlinks(false);

config.resolve.alias
  .set('~', resolve('src'))
  .set('@', resolve('src'));

config.module.rule('ts')
  .test(/\.tsx?$/)
  .use('thread-loader')
  .loader('thread-loader')
  .options({ workers })
  .end()
  .use('babel')
  .loader('babel-loader')
  .end()
  .use('ts')
  .loader('ts-loader')
  .options({ transpileOnly: true, happyPackMode: true })
  .end()
  .exclude.add(/node_modules/);

config.module.rule('js')
  .test(/\.jsx?$/)
  .use('thread-loader')
  .loader('thread-loader')
  .options({ workers })
  .end()
  .use('babel')
  .loader('babel-loader')
  .end()
  .exclude.add(/node_modules/);

createCssRule('css', /\.css$/);
createCssRule('sass', /\.(sass|scss)$/)
  .use('sass-loader')
  .loader('sass-loader')
  .end()
  .exclude.add(/tailwind\.sass$/);

config.module.rule('tailwind-css')
  .test(/tailwind\.sass$/)
  .use('style-loader')
  .loader('style-loader')
  .end()
  .use('css-loader')
  .loader('css-loader')
  .options({ sourceMap: false })
  .end()
  .use('postcss-loader')
  .loader('postcss-loader')
  .options({ sourceMap: false })
  .end()
  .use('sass-loader')
  .loader('sass-loader')
  .options({ sourceMap: false })
  .end();

config.module.rule('assets')
  .test(/\.(jpg|png|svg)$/)
  .type('asset')
  .parser({
    dataUrlCondition: {
      maxSize: 4 * 1024,
    },
  })
  .end();

config.module.rule('fonts')
  .test(/\.(ttf|eot|woff2?)$/)
  .type('asset')
  .parser({
    dataUrlCondition: {
      maxSize: 1024, // 1kb
    },
  })
  .end();

config.plugin('progress')
  .use(ProgressBarPlugin, [{
    renderThrottle: 100,
    format: [
      chalk.cyan.bold('  build '),
      chalk.bold('['),
      ':bar',
      chalk.bold(']'),
      chalk.green.bold(' :percent'),
      ' :msg',
    ].join(''),
    width: 30,
  }]);

config.plugin('html-webpack-plugin')
  .use(HtmlWebpackPlugin, [{
    template: resolve('src/template/template.html'),
  }]);

// config.plugin('define-sentry')
//   .use(webpack.DefinePlugin, [{
//     'process.env.ENABLE_SENTRY': process.env.ENABLE_SENTRY
//       ? JSON.stringify(true)
//       : JSON.stringify(false),
//   }]);

config.plugin('define-commit-hash')
  .use(webpack.DefinePlugin, [{
    'process.env.COMMIT_HASH': process.env.ENABLE_SENTRY
      ? JSON.stringify(childProcess.execSync('git rev-parse --short HEAD').toString().trim())
      : JSON.stringify(''),
  }]);

config.plugin('define-api-env')
  .use(webpack.DefinePlugin, [{
    'process.env.API_ENV': process.env.API_ENV === 'production'
      ? JSON.stringify('production')
      : JSON.stringify('development'),
  }]);

config.module.rules.values().forEach((v) => {
  if (v.uses.has('thread-loader') && os.cpus().length === 1) {
    v.uses.delete('thread-loader');
  }
});

module.exports = config;
