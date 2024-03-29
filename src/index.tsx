import './utils/bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { when } from 'mobx';
import { firstRenderService } from './service';
import { sleep } from './utils';

const oldRoot = document.getElementById('root')!;
const newRoot = document.createElement('div');

const root = createRoot(newRoot);
root.render(<App />);

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
