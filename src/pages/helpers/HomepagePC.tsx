import React from 'react';
import { useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { lang } from './lang';
import { HomepageHeader } from './header';
import { HomepageIndex } from './subpages/index';
import { HomepageWhy } from './subpages/why';
import { HomepageApps } from './subpages/apps';
import { HomepageNetwork } from './subpages/network';
import { HomepageDevelopers } from './subpages/developer';

import './index.local.sass';

const HomepagePC = () => (
  <div className="homepage-pc flex-1">
    <HomepageHeader />
    <HomepageContent />
  </div>
);

const HomepageContent = observer(() => {
  lang.useLang();
  const { pathname } = useLocation();

  if (!lang.ready) {
    return null;
  }

  return (<>
    {pathname === '/' && (
      <HomepageIndex />
    )}
    {pathname === '/why' && (
      <HomepageWhy />
    )}
    {pathname === '/apps' && (
      <HomepageApps />
    )}
    {pathname === '/network' && (
      <HomepageNetwork />
    )}
    {pathname === '/developers' && (
      <HomepageDevelopers />
    )}
  </>);
});


export default HomepagePC;
