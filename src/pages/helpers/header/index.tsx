import React from 'react';
import { action } from 'mobx';
import classNames from 'classnames';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { Language, Check, Menu as MenuIcon, Download } from '@mui/icons-material';
import { Menu, MenuItem, Drawer, List, ListItem, Divider } from '@mui/material';

import IconDownload from '~/icons/icon_download.svg';
import RumLogo from '~/icons/logo_rumsystem.svg';
import { langService, AllLanguages } from '~/service/lang';

import { lang } from '../lang';
import { Box } from '@mui/system';

export const HomepageHeader = observer(() => {
  lang.useLang();
  useLocation();
  const state = useLocalObservable(() => ({
    language: false,
    mbMenu: false,
  }));

  const menuAnchorEl = React.useRef<HTMLDivElement>(null);

  const handleOpenLanguage = action(() => {
    state.language = true;
  });

  const handleCloseLanguage = action(() => {
    state.language = false;
  });

  const handleToggleMenu = action(() => {
    state.mbMenu = !state.mbMenu;
  });

  const handleSwitchLang = (lang: AllLanguages) => {
    langService.switchLang(lang);
    handleCloseLanguage();
  };

  if (!lang.ready) {
    return null;
  }

  const links = [
    { to: 'apps', text: lang.header.apps, order: 1, active: !!matchPath(location.pathname, { path: '/apps', exact: true }) },
    { to: 'why', text: lang.header.why, order: 2, active: !!matchPath(location.pathname, { path: '/why', exact: true }) },
    { to: 'network', text: lang.header.network, order: 4, active: !!matchPath(location.pathname, { path: '/network', exact: true }) },
    { to: 'developers', text: lang.header.developers, order: 5, active: !!matchPath(location.pathname, { path: '/developers', exact: true }) },
  ] as const;

  return (<>
    <div className="h-[120px] mb:h-[75px]" />
    <div className="fixed mui-fixed top-0 left-0 right-0 h-[120px] mb:h-[75px] pb-3 mb:pb-0 flex justify-center items-bottom bg-white">
      <div className="mb:hidden flex justify-between w-full px-6 max-w-[1000px] items-end">
        {links.map((v) => (
          <LinkItem className="mb:hidden" item={v} key={v.to} />
        ))}
        <Link className="relative text-black font-medium order-3" to="/">
          <img
            className="w-30 z-10"
            src={RumLogo}
            alt=""
            draggable="false"
          />
          {!!matchPath(location.pathname, { path: '/', exact: true }) && (
            <div className="bg-main h-[2px] absolute -left-4 -right-4 bottom-px" />
          )}
        </Link>
      </div>

      <div className="pc:hidden flex flex-center">
        <Link className="text-black font-medium order-3" to="/">
          <img
            className="w-24  z-10"
            src={RumLogo}
            alt=""
            draggable="false"
          />
        </Link>
      </div>

      <div
        className="pc:hidden absolute mui-fixed flex px-4 py-3 flex-center cursor-pointer right-0 bottom-0"
        onClick={handleToggleMenu}
      >
        <MenuIcon />
      </div>

      <div
        className={classNames(
          'mb:hidden flex gap-x-16 absolute mui-fixed right-0 mb top-0 mt-8 mr-10 ',
          'text-kanit text-link text-16',
        )}
      >
        <div
          className="flex flex-center cursor-pointer"
        >
          <img className="mr-2" src={IconDownload} alt="" />
          {lang.header.download}
        </div>
        <div
          className="flex flex-center cursor-pointer"
          ref={menuAnchorEl}
          onClick={handleOpenLanguage}
        >
          <Language className="mr-[6px] text-22" />
          {lang.header.language}
        </div>

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

        <Drawer
          classes={{
            paper: 'outline-none',
          }}
          anchor="right"
          open={state.mbMenu}
          onClose={handleToggleMenu}
        >
          <Box
            role="presentation"
            onClick={handleToggleMenu}
            onKeyDown={handleToggleMenu}
          >
            <List>
              <ListItem button>
                <div className="w-full flex flex-center">
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
              </ListItem>
              <Divider />
              {links.map((v) => (
                <ListItem button key={v.to}>
                  <LinkItem className="mx-4 py-1" item={v} key={v.to} />
                </ListItem>
              ))}
              <Divider />
              <ListItem className="text-kanit justify-end px-5" button>
                <Download className="mr-[6px] text-22" />
                {lang.header.download}
              </ListItem>
              <ListItem
                className="text-kanit justify-end px-5"
                button
                onClick={() => handleSwitchLang('en')}
              >
                {langService.state.lang === 'en' && (
                  <Check className="text-link" />
                )}
                <Language className="mr-[6px] text-22" />
                En
              </ListItem>
              <ListItem
                className="text-kanit justify-end px-5"
                button
                onClick={() => handleSwitchLang('cn')}
              >
                {langService.state.lang === 'cn' && (
                  <Check className="text-link" />
                )}
                <Language className="mr-[6px] text-22" />
                中文
              </ListItem>
            </List>
          </Box>
        </Drawer>

      </div>
    </div>
  </>);
});

interface Item {
  to: string
  text: string
  order: number
  active: boolean
}

export const LinkItem = ({ item, className }: { item: Item, className?: string }) => (
  <Link
    className={classNames(
      'relative text-black font-medium text-kanit tracking-wide text-20 hover:no-underline mb-[2px]',
      className,
    )}
    style={{ order: item.order }}
    to={`/${item.to}`}
    key={item.to}
  >
    <div
      className={classNames(
        'relative z-10',
        item.active && 'border-bottom',
      )}
    >
      {item.text}
    </div>
    {item.active && (
      <div className="bg-black h-[2px] absolute -left-4 -right-4" />
    )}
  </Link>
);
