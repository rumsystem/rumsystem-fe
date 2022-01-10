import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';

interface RouteItem {
  noExact?: boolean
  path: string | Array<string>
  component: any
  children?: Array<RouteItem>
}

const modifiedRoutes = routes as Array<RouteItem>;
const root = modifiedRoutes.find((v) => v.path === '/');
if (root) {
  root.path = ['/', '/why', '/apps', '/network', '/developers'];
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
