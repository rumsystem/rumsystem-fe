import { action } from 'mobx';
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { firstRenderService } from './service';

const routes = !process.env.SSR
  ? require('./routes').default
  : require('./routes-ssr').default;

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

const PageRenderHook = (props: { children: React.ReactElement }) => {
  React.useEffect(action(() => {
    firstRenderService.state.firstRender = true;
  }), []);
  return props.children;
};

const genRoutes = (list: Array<RouteItem>) => list.map((item, index) => {
  const Page = process.env.SSR
    ? item.component.default
    : React.lazy(item.component);
  return (
    <Route exact={!item.noExact} key={index} path={item.path}>
      <PageRenderHook>
        <Page>
          {!!item.children && genRoutes(item.children)}
        </Page>
      </PageRenderHook>
    </Route>
  );
});

const Router = () => {
  const SuspenseWrapper = (props: {children: React.ReactNode}) => (<>
    {!process.env.SSR && (
      <Suspense fallback={<div />}>
        {props.children}
      </Suspense>
    )}
    {process.env.SSR && props.children}
  </>);

  return (
    <SuspenseWrapper>
      <Switch>
        {genRoutes(routes)}
      </Switch>
    </SuspenseWrapper>
  );
};

export default Router;
