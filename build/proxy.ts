/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import http from 'http';
import * as mime from 'mime';
import axios from 'axios';
import httpProxy from 'http-proxy';
import { config } from './dev-config';

const urls = config.urls;
const proxies = {
  fe: httpProxy.createProxy({
    target: `${urls.fe.protocal}://${urls.fe.host}:${urls.fe.port}`,
  }),
  // api: httpProxy.createProxy({
  //   target: `${urls.hub.protocal}://${urls.hub.host}:${urls.hub.port}`,
  //   secure: false,
  //   cookiePathRewrite: '/',
  // }),
  // prod: httpProxy.createProxy({
  //   target: `${urls.prod.protocal}://${urls.prod.host}:${urls.prod.port}`,
  //   agent: urls.prod.agent,
  //   secure: false,
  //   cookiePathRewrite: '/',
  // }),
};

// proxies.api.on('error', () => {});
proxies.fe.on('error', () => {});
// proxies.prod.on('error', () => {});
// proxies.prod.on('proxyRes', (proxyRes) => {
//   const setCookie = proxyRes.headers['set-cookie'];
//   // remove cookie secure flag
//   if (Array.isArray(setCookie)) {
//     proxyRes.headers['set-cookie'] = setCookie.map((sc) => sc.split(';')
//       .filter((v) => v.trim().toLowerCase() !== 'secure')
//       .join('; '));
//   }
// });

mime.define({
  'application/json': ['ipynb'],
});

export const startProxy = (prod = false) => {
  const server = http.createServer(async (req, res) => {
    req.on('error', () => {});
    res.on('error', () => {});
    const url = req.url || '';

    if (/\.(js|map|css|png|jpg|jpeg|svg|json|ico)$/.exec(url)) {
      return proxies.fe.web(req, res);
    }

    try {
      const html = await axios.get(`${urls.fe.protocal}://${urls.fe.host}:${urls.fe.port}`);
      res.end(html.data);
    } catch (e) {
      res.statusCode = 500;
      res.end('');
    }
  });

  server.on('error', () => {});

  server.listen(config.listen);
  // eslint-disable-next-line no-console
  console.log([
    `\n${prod ? 'prod' : 'dev'} proxy started at `,
    `http://localhost:${config.listen}`,
    `${prod ? ` to server ${config.urls.prod.host}` : ''}`,
  ].join(''));
};

const text = `
Usage: yarn proxy ENV [prod-domain]
start proxy for api requests.

Example:
yarn proxy dev      \x1b[90mstart dev proxy\x1b[37m
yarn proxy prod     \x1b[90mstart prod proxy connect to prod (config.urls.prod.host)\x1b[37m
yarn proxy help     \x1b[90mprint this message\x1b[37m
`;

if (require.main === module) {
  if (process.argv[2] === 'help') {
    // eslint-disable-next-line no-console
    console.log(text);
  } else {
    startProxy(process.argv[2] === 'prod');
  }
}
