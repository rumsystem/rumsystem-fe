module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  const ssr = !!process.env.SSR;
  const prod = api.env('production');

  const config = {
    sourceMaps: true,
    presets: [
      '@babel/preset-react',
      '@babel/preset-typescript',
      prod && ['@babel/preset-env', {
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
      prod && !ssr && ['@babel/plugin-transform-runtime', {
        useESModules: true,
      }],
      !prod && !ssr && 'react-refresh/babel',
    ].filter(Boolean),
  };

  return config;
};
