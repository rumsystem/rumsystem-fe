const path = require('path');
const childProcess = require('child_process');
const chalk = require('chalk');
const webpack = require('webpack');
const Config = require('webpack-chain');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const resolve = (dir) => path.join(__dirname, '../../..', dir);

const config = new Config();

const createCssRule = ({
  name,
  test,
  scope,
  sourceMap,
  insertBeforeComment,
  sass,
}) => {
  const rule = config.module.rule(name).test(test);

  rule.use('ssr-style-loader')
    .loader(resolve('src/utils/ssr-style-loader/loader.js'))
    .options({ insertBeforeComment: insertBeforeComment ?? 'style-loader-insertion-point' });

  rule.use('css-loader')
    .loader('css-loader')
    .options({
      sourceMap,
      esModule: !process.env.SSR,
    });

  if (scope) {
    rule.use('scoped-css-loader')
      .loader('scoped-css-loader');
  }

  rule.use('postcss-loader')
    .loader('postcss-loader')
    .options({ sourceMap });

  if (sass) {
    rule.use('sass-loader')
      .loader('sass-loader')
      .options({ sourceMap })
      .end();
  }

  return rule;
};

config.mode('none');

config.context(resolve('.'));

if (process.env.SSR) {
  config.entry('ssr').add(resolve('./src/ssr.tsx'));
} else {
  config.entry('index').add(resolve('./src/index.tsx'));
}

config.output
  .path(process.env.SSR ? resolve('dist_ssr') : resolve('dist'))
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
  .set('@', resolve('src'))
  .set('ssr-style-loader', resolve('src/utils/ssr-style-loader/index.tsx'));

config.module.rule('ts')
  .test(/\.tsx?$/)
  .use('babel')
  .loader('babel-loader')
  .end()
  .exclude.add(/node_modules/);

config.module.rule('js')
  .test(/\.jsx?$/)
  .use('babel')
  .loader('babel-loader')
  .end()
  .exclude.add(/node_modules/);

createCssRule({
  name: 'css',
  test: /\.css$/,
  scope: true,
  sourceMap: true,
});

createCssRule({
  name: 'sass',
  test: /\.(sass|scss)$/,
  scope: true,
  sourceMap: true,
  sass: true,
})
  .exclude
  .add(/tailwind\.sass$/)
  .add(/tailwind-base\.sass$/);

createCssRule({
  name: 'tailwind-base-css',
  test: /tailwind-base\.sass$/,
  insertBeforeComment: 'preflight-injection-point',
  sourceMap: false,
  scope: false,
  sass: true,
});

createCssRule({
  name: 'tailwind-css',
  test: /tailwind\.sass$/,
  sourceMap: false,
  scope: false,
  sass: true,
});

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
    minify: false,
  }]);

config.plugin('define-commit-hash')
  .use(webpack.DefinePlugin, [{
    'process.env.COMMIT_HASH': process.env.ENABLE_SENTRY
      ? JSON.stringify(childProcess.execSync('git rev-parse --short HEAD').toString().trim())
      : JSON.stringify(''),
  }]);

config.plugin('define-ssr')
  .use(webpack.DefinePlugin, [{
    'process.env.SSR': JSON.stringify(process.env.SSR ? 'true' : ''),
  }]);

module.exports = config;
