import React from 'react';
import classNames from 'classnames';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { Link, matchPath, useLocation } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';

import IconDownload from '~/icons/icon_download.svg';
import RumLogo from '~/icons/logo_rumsystem.svg';
import { langService, AllLanguages } from '~/service/lang';

import { lang } from '../lang';
import { Menu, MenuItem } from '@mui/material';
import { action } from 'mobx';
import { Check } from '@mui/icons-material';

export const HomepageHeader = observer(() => {
  lang.useLang();
  useLocation();
  const state = useLocalObservable(() => ({
    language: false,
  }));

  const menuAnchorEl = React.useRef<HTMLSpanElement>(null);

  const handleOpenLanguage = action(() => {
    state.language = true;
  });

  const handleCloseLanguage = action(() => {
    state.language = false;
  });

  const handleSwitchLang = (lang: AllLanguages) => {
    langService.switchLang(lang);
    handleCloseLanguage();
  };

  if (!lang.ready) {
    return null;
  }

  return (<>
    <div className="h-[120px]" />
    <div className="fixed mui-fixed top-0 left-0 right-0 h-[120px] pb-3 flex justify-center items-bottom bg-white">
      <div className="flex justify-center gap-x-30 items-end">
        {([
          { to: 'apps', text: 'Apps & Tools', order: 1, active: !!matchPath(location.pathname, { path: '/apps', exact: true }) },
          { to: 'why', text: 'Why Rum', order: 2, active: !!matchPath(location.pathname, { path: '/why', exact: true }) },
          { to: 'network', text: 'Token & Eco', order: 4, active: !!matchPath(location.pathname, { path: '/network', exact: true }) },
          { to: 'developers', text: 'Developers', order: 5, active: !!matchPath(location.pathname, { path: '/developers', exact: true }) },
        ] as const).map((v) => (
          <Link
            className="relative text-black font-medium text-kanit tracking-wide text-20 hover:no-underline mb-[2px]"
            style={{ order: v.order }}
            to={`/${v.to}`}
            key={v.to}
          >
            <div
              className={classNames(
                'relative z-10',
                v.active && 'border-bottom',
              )}
            >
              {v.text}
            </div>
            {v.active && (
              <div className="bg-black h-[2px] absolute -left-4 -right-4" />
            )}
          </Link>
        ))}
        <Link className="relative text-black font-medium relative order-3" to="/">
          <img
            className="w-30 relative z-10"
            src={RumLogo}
            alt=""
            draggable="false"
          />
          {!!matchPath(location.pathname, { path: '/', exact: true }) && (
            <div className="bg-main h-[2px] absolute -left-4 -right-4 bottom-px" />
          )}
        </Link>
      </div>

      <div
        className={classNames(
          'flex gap-x-16 absolute mui-fixed right-0 top-0 mt-8 mr-10',
          'text-kanit text-link text-16 mb:mt-4 mb:mr-5',
        )}
      >
        <span
          className="flex flex-center cursor-pointer"
        >
          <img className="mr-2" src={IconDownload} alt="" />
          Download
        </span>
        <span
          className="flex flex-center cursor-pointer"
          ref={menuAnchorEl}
          onClick={handleOpenLanguage}
        >
          <LanguageIcon className="mr-2 text-22" />
          Language
        </span>

        <Menu
          className="mt-2"
          disableScrollLock
          anchorEl={menuAnchorEl.current}
          anchorOrigin={{
            horizontal: 'center',
            vertical: 'bottom',
          }}
          transformOrigin={{
            horizontal: 'center',
            vertical: 'top',
          }}
          open={state.language}
          onClose={handleCloseLanguage}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={() => handleSwitchLang('en')}>
            En
            {langService.state.lang === 'en' && (
              <Check className="text-link" />
            )}
          </MenuItem>
          <MenuItem onClick={() => handleSwitchLang('cn')}>
            中文
            {langService.state.lang === 'cn' && (
              <Check className="text-link" />
            )}
          </MenuItem>
        </Menu>
      </div>
    </div>
  </>);
});
