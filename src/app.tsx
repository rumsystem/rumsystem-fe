import React from 'react';
import { Router, useLocation } from 'react-router-dom';
import RouterComponent from './router';
import Layout from './layouts';
import history from './history';

const LocationChange = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const App = () => (
  <Router history={history}>
    <LocationChange />
    <Layout>
      <RouterComponent />
    </Layout>
  </Router>
);

export default App;
