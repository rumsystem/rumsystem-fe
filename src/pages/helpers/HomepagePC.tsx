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

import './index.sass';

const HomepagePC = observer(() => {
  lang.useLang();
  if (!lang.ready) { return null; }
  return (
    <div className="homepage-pc flex-col flex-1">
      <HomepageHeader />
      <HomepageContent />
    </div>
  );
});

const HomepageContent = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    // preload app image
    const img = new Image();
    img.src = 'https://img-cdn.xue.cn/311-app_screen_1_opt.png';
  }, []);

  return (<>
    {pathname === '/' && (
      <HomepageIndex />
    )}
    {pathname === '/apps' && (
      <HomepageApps />
    )}
    {pathname === '/why' && (
      <HomepageWhy />
    )}
    {pathname === '/network' && (
      <HomepageNetwork />
    )}
    {pathname === '/developers' && (
      <HomepageDevelopers />
    )}
  </>);
};


export default HomepagePC;
