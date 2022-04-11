import { promises as fs } from 'fs';
import { join } from 'path';
import rimraf from 'rimraf';
import { serve } from './serve';
import { destroy, renderPage } from './renderer';
import { promiseAllSettledThrottle } from './utils';

const pathToGen = [
  '/',
  '/why',
  '/apps',
  '/network',
  '/developers',
];

const run = async () => {
  const distPath = join(__dirname, '../dist');
  const distGenPath = join(__dirname, '../dist_gen');
  const { port, close } = await serve(distPath);

  const tasks = pathToGen.map((v) => async () => {
    const html = await renderPage(`http://localhost:${port}${v}`, v);
    await new Promise<void>((rs, rj) => {
      rimraf(distGenPath, (err) => {
        if (err) {
          rj(err);
          return;
        }
        rs();
      });
    });
    await fs.cp(distPath, distGenPath, { recursive: true });
    const dir = join(distGenPath, v);
    const filePath = v === '/'
      ? join(distGenPath, 'index.html')
      : join(distGenPath, v, 'index.html');

    const write = async () => {
      try {
        await fs.mkdir(dir, {
          recursive: true,
        });
      } catch (e) {
        console.log(`mkdir ${dir} failed!`);
        console.error(e);
        process.exit(1);
      }
      try {
        await fs.writeFile(filePath, html);
      } catch (e) {
        console.log(`write file ${filePath} failed!`);
        console.error(e);
        process.exit(1);
      }
    };

    return write;
  });

  console.log('generating rendered static html...');

  const result = await promiseAllSettledThrottle(
    tasks,
    5,
  );

  destroy();
  close();

  const writes = result
    .map((v) => (v.status === 'fulfilled' ? v.value : null))
    .filter(<T>(v: T | null): v is T => !!v);

  await promiseAllSettledThrottle(
    writes,
    5,
  );

  process.exit(0);
};

run();
