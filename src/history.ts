import { createBrowserHistory, createMemoryHistory } from 'history';

export const routerHistory = process.env.SSR
  ? createMemoryHistory()
  : createBrowserHistory();

if (!process.env.SSR) {
  routerHistory.listen(() => {
    window.scrollTo(0, 0);
  });
}
