import './utils/bootstrap';
import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

import './style/tailwind-base.sass';
import './style/tailwind.sass';
import './style/global.sass';

ReactDom.render(
  React.createElement(App),
  document.getElementById('root'),
);