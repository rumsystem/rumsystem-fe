module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  const config = {
    sourceMaps: true,
    presets: [
      '@babel/preset-react',
      api.env('production') && ['@babel/preset-env', {
        modules: false,
        bugfixes: true,
        useBuiltIns: 'usage',
        corejs: 3,
      }],
    ].filter(Boolean),
    plugins: [
      ['babel-plugin-react-scoped-css', {
        include: '.local.(sa|sc|c)ss$',
      }],
      ['@babel/plugin-transform-runtime', {
        useESModules: true,
      }],
      !api.env('production') && 'react-refresh/babel',
      '@firefox-pro-coding/react-composition-api/babel',
    ].filter(Boolean),
  };

  return config;
};
