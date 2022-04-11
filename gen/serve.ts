import { promises as fs, createReadStream } from 'fs';
import serveHandler from 'serve-handler';
import getPort from 'get-port';
import http from 'http';
import { join } from 'path';


const exist = async (filePath: string) => {
  try {
    await fs.stat(filePath);
    return true;
  } catch (e) {
    return false;
  }
};

export const serve = async (root?: string) => {
  const siteRoot = root ?? join(__dirname, '../dist_gen');

  const port = await getPort({ port: 3000 });
  const fallbackIndexHTML = (req: http.IncomingMessage, res: http.ServerResponse) => {
    createReadStream(join(siteRoot, 'index.html')).pipe(res);
  };
  const server = http.createServer(async (req, res) => {
    if (!req.url) {
      res.statusCode = 404;
      res.end('');
      return;
    }
    const url = new URL(req.url, `http://${req.headers.host}`);
    const filePath = join(siteRoot, url.pathname);
    const filePathIndex = join(siteRoot, url.pathname, 'index.html');

    if (await exist(filePathIndex)) {
      const content = await fs.readFile(filePathIndex);
      res.end(content);
      return;
    }

    if (!await exist(filePath)) {
      fallbackIndexHTML(req, res);
      return;
    }
    serveHandler(
      req,
      res,
      {
        public: siteRoot,
      },
    );
  });

  await new Promise<void>((rs) => {
    server.listen(port, () => {
      rs();
      console.log(`Serving ${siteRoot} at http://localhost:${port}`);
    });
  });

  return {
    port,
    close: () => {
      server.close();
    },
  };
};

if (require.main === module) {
  serve();
}
