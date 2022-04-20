import { action } from 'mobx';
import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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

const modifiedRoutes = (routes as Array<RouteItem>).map((v) => ({
  ...v,
  path: v.path !== '/'
    ? v.path
    : ['/', '/why', '/apps', '/network', '/developers'],
  component: process.env.SSR
    ? v.component.default
    : React.lazy(v.component),
}));

const PageRenderHook = (props: { children: React.ReactElement }) => {
  React.useEffect(action(() => {
    firstRenderService.state.firstRender = true;
  }), []);
  return props.children;
};

const PageSwitch = () => {
  const location = useLocation();
  const item = modifiedRoutes.find((v) => (Array.isArray(v.path) ? v.path : [v.path]).includes(location.pathname));
  // TODO: 404 fallback
  if (!item) { return null; }
  return (
    <PageRenderHook>
      <item.component />
    </PageRenderHook>
  );
};

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
      <Routes>
        <Route path="/*" element={<PageSwitch />} />
      </Routes>
    </SuspenseWrapper>
  );
};

export default Router;
