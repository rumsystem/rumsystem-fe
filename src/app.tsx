import React from 'react';
import { observer } from 'mobx-react-lite';
import { Router, useLocation } from 'react-router-dom';
import RouterComponent from './router';
import Layout from './layouts';
import { routerHistory } from './history';
import { ThemeRoot } from './utils/theme';
import { initService } from './service';
import { themeLang } from './service/theme';

const LocationChange = () => {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const App = observer(() => {
  themeLang.useLang();
  React.useEffect(() => initService(), []);
  if (!themeLang.ready) {
    return null;
  }
  return (
    <ThemeRoot>
      <Router history={routerHistory}>
        <LocationChange />
        <Layout>
          <RouterComponent />
        </Layout>
      </Router>
    </ThemeRoot>
  );
});

export default App;
