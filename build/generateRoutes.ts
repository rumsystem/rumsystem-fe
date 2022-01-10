import { promises as fs } from 'fs';
import path from 'path';
import watch from 'node-watch';

const resolve = (p: string) => path.join(__dirname, '..', p);

interface RouteItem {
  noExact?: boolean
  path: string
  component: any
  children?: Array<RouteItem>
  isLayout?: boolean
}

const generateRouteFileContent = async () => {
  const parseDir = async (base: string, dir: string): Promise<RouteItem | Array<RouteItem>> => {
    const filePaths = await fs.readdir(dir);
    const fileItems = (await Promise.all(
      filePaths.map(async (fileName) => {
        const filePath = path.join(dir, fileName);
        const relativePath = filePath.replace(base, '').replace(/\\/g, '/');

        const stat = await fs.stat(filePath);
        return {
          filePath,
          relativePath,
          dir: stat.isDirectory(),
        };
      }),
    )).filter((v) => v.dir || (v.relativePath.endsWith('.tsx') && !/\/(helpers?|lang)/.test(v.relativePath)));

    const hasLayout = fileItems.some(
      (v) => v.relativePath.endsWith('/_layout.tsx')
        && !v.dir,
    );

    const parsedRoutes = (await Promise.all(
      fileItems.map(async (fileItem) => {
        if (fileItem.dir) {
          return parseDir(base, fileItem.filePath);
        }

        const importPathBase = fileItem.relativePath
          .replace(/\/index\.tsx$/, '')
          .replace(/\/$/, '')
          .replace(/\.tsx$/, '');
        const importPath = `./pages${importPathBase}`;
        const urlPath = importPathBase.replace(/\$(.+?)($|\/)/, ':$1$2') || '/';
        const chunkNameBase = urlPath
          .split('/')
          .join('_')
          .replace(/:/g, '')
          .replace(/^_/, '')
          .replace(/hub_app_/g, 'a_');
        const chunkName = `p_${chunkNameBase}`;

        return {
          isLayout: fileItem.relativePath.endsWith('/_layout.tsx') && !fileItem.dir,
          path: urlPath,
          component: `!!!() => import(/* webpackChunkName: '${chunkName}' */'${importPath}')!!!`,
        };
      }),
    )).flatMap((v) => v);

    if (hasLayout) {
      const layout = parsedRoutes.find((v) => v.isLayout)!;
      const routesWithoutLayout = parsedRoutes.filter((v) => !v.isLayout);
      routesWithoutLayout.forEach((v) => {
        delete v.isLayout;
      });

      return {
        noExact: true,
        path: layout.path.replace(/_layout$/, ''),
        component: layout.component,
        children: routesWithoutLayout,
      };
    }

    parsedRoutes.forEach((v) => {
      delete v.isLayout;
    });

    return parsedRoutes;
  };

  const routeList = await parseDir(resolve('src/pages'), resolve('src/pages'));
  const content = JSON
    .stringify(routeList, null, 2)
    .replace(/("!!!|!!!")/g, '');

  return `export default ${content}`;
};

export const generateRoutes = async () => {
  const routesFile = await generateRouteFileContent();
  await fs.writeFile(resolve('src/routes.ts'), routesFile);
  return routesFile;
};

export const watchRoutes = async () => {
  let routesFile = await generateRoutes();
  let queue = false;
  let running = false;

  const tryRun = () => {
    queue = true;
    if (running) {
      return;
    }
    run();
  };

  const run = async () => {
    queue = false;
    running = true;
    const newRoutesFile = await generateRouteFileContent();

    if (routesFile !== newRoutesFile) {
      routesFile = newRoutesFile;
      await fs.writeFile(resolve('src/routes.ts'), routesFile).catch((err) => {
        console.error(err);
        process.exit(1);
      });
    }

    running = false;
    if (queue) {
      run();
    }
  };

  watch(
    resolve('src/pages'),
    { recursive: true },
    tryRun,
  );
};

if (require.main === module) {
  generateRoutes();
}
