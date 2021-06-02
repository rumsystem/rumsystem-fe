module.exports = (api) => {
  const tailwindcss = api.file.endsWith('tailwind.sass');
  const presetEnv = !api.file.includes('node_modules') && !tailwindcss;
  const cssnano = api.mode === 'production' && !tailwindcss && !api.file.endsWith('.min.css');

  return {
    hideNothingWarning: true,
    plugins: [
      tailwindcss && 'tailwindcss',
      presetEnv && ['postcss-preset-env', {
        features: {
          'all-property': false,
          'case-insensitive-attribute': false,
          'logical-properties-and-values': false,
        },
      }],
      cssnano && ['cssnano', {
        preset: 'lite',
      }],
    ].filter(Boolean),
  };
};
