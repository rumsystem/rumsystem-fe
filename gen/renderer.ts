import puppeteer from 'puppeteer';

const state = {
  app: null as any as puppeteer.Browser,
};

export const setup = async () => {
  if (!state.app) {
    state.app = await puppeteer.launch({
      headless: true,
      // args: [
      //   '--window-size=1612,980',
      // ],
    });
    (globalThis as any).app = state.app;
  }
};


export const renderPage = async (url: string, pathName: string): Promise<string> => {
  await setup();
  const start = performance.now();
  const page = await state.app.newPage();
  // await page.setViewport({ width: 1600, height: 850 });
  await page.goto(url, {
    waitUntil: 'networkidle0',
  });
  await page.evaluate(() => {
    document.querySelectorAll('style[data-emotion="css"]').forEach((v) => {
      const style = v as HTMLStyleElement;
      const rules = style.sheet?.cssRules;
      if (!rules) {
        return;
      }
      const cssText = Array.from(rules).map((v) => v.cssText).join('');
      v.innerHTML = cssText;
    });
  });
  const html = await page.evaluate(() => document.documentElement.outerHTML);
  await page.close();
  const end = performance.now();

  console.log(`${((end - start) / 1000).toFixed(2)}s`, pathName);

  return html;
};

export const destroy = () => {
  state.app?.close();
};
