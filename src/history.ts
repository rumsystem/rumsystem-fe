import { createBrowserHistory } from 'history';

export const routerHistory = createBrowserHistory();

routerHistory.listen(() => {
  window.scrollTo(0, 0);
});
