import React from 'react';
import { observer } from 'mobx-react-lite';
import { BrowserRouter, useLocation } from 'react-router-dom';
import RouterComponent from './router';
import { ThemeRoot } from './utils/theme';
import { initService, initServiceSSR } from './service';

const LocationChange = () => {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const App = observer(() => {
  React.useEffect(() => initService(), []);

  initServiceSSR();

  const RouterWrapper = (props: {children: React.ReactNode}) => (<>
    {!process.env.SSR && (
      <BrowserRouter>
        {props.children}
      </BrowserRouter>
    )}
    {process.env.SSR && props.children}
  </>);

  return (
    <RouterWrapper>
      <ThemeRoot>
        <LocationChange />
        <RouterComponent />
      </ThemeRoot>
    </RouterWrapper>
  );
});

export default App;
