import './utils/bootstrap';
import { createRoot } from 'react-dom/client';
import { when } from 'mobx';
import { firstRenderService } from './service';
import App from './app';
import { injectStyleTo, sleep } from './utils';
import tailwindBaseCss from './style/tailwind-base.sass?inline';
import tailwindCss from './style/tailwind.sass?inline';
import './style/global.sass';

injectStyleTo('preflight-injection-point', tailwindBaseCss);
injectStyleTo('style-loader-insertion-point', tailwindCss);

const oldRoot = document.getElementById('root')!;
const newRoot = document.createElement('div');

const root = createRoot(newRoot);
root.render(
  <App />,
);

Promise.race([
  sleep(1000),
  when(() => firstRenderService.state.firstRender),
]).then(() => {
  // wait for layout to prevent flashing
  setTimeout(() => {
    oldRoot.remove();
    document.body.append(newRoot);
    newRoot.id = 'root';
  });
});
