import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';

interface RouteItem {
  noExact?: boolean
  path: string
  component: any
  children?: Array<RouteItem>
}

const genRoutes = (list: Array<RouteItem>) => list.map((item, index) => {
  const Page = React.lazy(item.component);
  return (
    <Route exact={!item.noExact} key={index} path={item.path}>
      <Page>
        {!!item.children && genRoutes(item.children)}
      </Page>
    </Route>
  );
});

const Router = () => (
  <Suspense fallback={<div />}>
    <Switch>
      {genRoutes(routes)}
    </Switch>
  </Suspense>
);

export default Router;
