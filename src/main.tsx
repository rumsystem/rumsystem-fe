import './utils/bootstrap';
import { createRoot } from 'react-dom/client';
import { when } from 'mobx';
import { firstRenderService } from './service';
import App from './app';
import { sleep } from './utils';
import './style/tailwind-base.sass';
import './style/tailwind.sass';
import './style/global.sass';

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
