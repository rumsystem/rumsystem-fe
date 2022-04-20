import path from 'path';
import fs from 'fs';
import React from 'react';
import express from 'express';
import axios from 'axios';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import createEmotionServer from '@emotion/server/create-instance';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import { createPoolContext } from '~/utils/ssr-style-loader';
import { themeService, titleService } from './service';
import App from './app';

const template = fs.readFileSync(path.join(__dirname, '../dist/index.html')).toString();

const allowedRoutes = [
  '/',
  '/apps',
  '/why',
  '/network',
  '/developers',
];

const renderPage = (path: string) => {
  const { Provider: SSRStyleProvider, pool } = createPoolContext();
  let html = template;
  let appHTML = '';

  const {
    Provider: TitleProvider,
    value: titleProviderValue,
  } = titleService.createTitleContext();

  const cache = createCache({ key: 'mui-css' });
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);
  appHTML = renderToString(
    <StaticRouter location={path}>
      <TitleProvider>
        <SSRStyleProvider>
          <CacheProvider value={cache}>
            <App />
          </CacheProvider>
        </SSRStyleProvider>
      </TitleProvider>
    </StaticRouter>,
  );
  // Grab the CSS from emotion
  const emotionChunks = extractCriticalToChunks(appHTML);
  const emotionCss = constructStyleTagsFromChunks(emotionChunks);
  const themeServiceStyleTag = `<style data-theme-service="true">${themeService.state.css}</style>`;

  for (const item of pool.values()) {
    const css = item.css.toString();
    const styleTag = `<style data-ssr-style-hash=${item.hash}>${css}</style>`;
    if (item.loaderOptions.insertBeforeComment) {
      html = html.replace(
        new RegExp(`<!-- ${item.loaderOptions.insertBeforeComment} -->`),
        `${styleTag}\n<!-- ${item.loaderOptions.insertBeforeComment} -->`,
      );
    } else {
      html = html.replace(
        '</head>',
        `${styleTag}\n</head>`,
      );
    }
  }

  html = html
    // .replace(
    //   '</head>',
    //   '<script defer src="/index.js"></script>\n</head>',
    // )
    .replace(
      /<title>.+?<\/title>/,
      `<title>${titleProviderValue.title}</title>`,
    )
    .replace(
      '<!-- mui-insertion-point -->',
      `${emotionCss}\n<!-- mui-insertion-point -->`,
    )
    .replace(
      '<div id="root"></div>',
      `<div id="root">${appHTML}</div>`,
    )
    .replace(
      '</head>',
      `${themeServiceStyleTag}\n</head>`,
    );

  return html;
};

const startServer = () => {
  const app = express();

  app.get(allowedRoutes, (req, res) => {
    try {
      const html = renderPage(req.url);
      res.type('html');
      res.send(html);
      res.end();
    } catch (e) {
      console.error(e);
      res.statusCode = 500;
      res.end();
    }
  });

  app.get('*', (req, res) => {
    axios.get(`http://localhost:8904${req.url}`, {
      responseType: 'arraybuffer',
    }).then((v) => {
      res.type(v.headers['content-type']);
      res.send(v.data);
      res.end();
    }, () => {
      res.statusCode = 500;
      res.end();
    });
  });

  app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('listen at http://localhost:3000');
  });
};

startServer();
