import React from 'react';
import { Router } from 'react-router-dom';
import RouterComponent from './router';
import Layout from './layouts';
import history from './history';

const App = () => (
  <Router history={history}>
    <Layout>
      <RouterComponent />
    </Layout>
  </Router>
);

// export default hot(App);
export default App;
