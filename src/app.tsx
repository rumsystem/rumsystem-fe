import React from 'react';
import { observer } from 'mobx-react-lite';
import { Router, useLocation } from 'react-router-dom';
import RouterComponent from './router';
import Layout from './layouts';
import { routerHistory } from './history';
import { ThemeRoot } from './utils/theme';
import { initService, initServiceSSR } from './service';

import injectTailwindBase from './style/tailwind-base.sass';
import injectTailwind from './style/tailwind.sass';
import injectGlobal from './style/global.sass';

const LocationChange = () => {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const App = observer(() => {
  injectTailwindBase();
  injectTailwind();
  injectGlobal();
  React.useEffect(() => initService(), []);

  initServiceSSR();

  const RouterWrapper = (props: {children: React.ReactNode}) => (<>
    {!process.env.SSR && (
      <Router history={routerHistory}>
        {props.children}
      </Router>
    )}
    {process.env.SSR && props.children}
  </>);

  return (
    <RouterWrapper>
      <ThemeRoot>
        <LocationChange />
        <Layout>
          <RouterComponent />
        </Layout>
      </ThemeRoot>
    </RouterWrapper>
  );
});

export default App;
