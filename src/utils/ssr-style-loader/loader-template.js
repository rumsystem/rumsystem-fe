// eslint-disable-next-line import/no-unresolved
const content = require('@@module-path@@');
const ssrStyleLoader = require('ssr-style-loader');

const css = content.__esModule ? content.default : content;

const styleTag = typeof document !== 'undefined'
  ? document.createElement('style')
  : null;

if (module.hot) {
  module.hot.accept(
    '@@module-path@@',
    () => {
      module.hot.invalidate();
    },
  );
  module.hot.dispose((data) => {
    data.styleTag = styleTag;
  });
}

module.exports = ssrStyleLoader.createHook(css, '@@module-hash@@', '@@loader-options@@');
