import React from 'react';
import { action } from 'mobx';
import classNames from 'classnames';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { Link, matchPath, useLocation, useNavigate } from 'react-router-dom';
import { Language, Check, Menu as MenuIcon } from '@mui/icons-material';
import { Menu, MenuItem, Drawer, List, ListItem, Divider, Box } from '@mui/material';

import RumLogo from '~/icons/logo_rumsystem.svg';
import { langService, AllLanguages, langName } from '~/service';

import { lang } from '../lang';
import { ThemeLight } from '~/utils/theme';

export const HomepageHeader = observer(() => {
  const location = useLocation();
  const navigate = useNavigate();
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

  const links = [
    { to: 'apps', text: lang.header.apps, order: 1, active: !!matchPath('/apps', location.pathname) },
    { to: 'why', text: lang.header.why, order: 2, active: !!matchPath('/why', location.pathname) },
    { to: 'network', text: lang.header.network, order: 4, active: !!matchPath('/network', location.pathname) },
    { to: 'developers', text: lang.header.developers, order: 5, active: !!matchPath('/developers', location.pathname) },
  ] as const;

  return (<>
    <div className="h-[120px] mb:h-[75px]" />
    <div className="fixed mui-fixed top-0 left-0 right-0 h-[120px] mb:h-[75px] pb-3 mb:pb-0 flex justify-center items-bottom bg-white z-10">
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
          {!!matchPath('/', location.pathname) && (
            <div className="bg-main h-[2px] absolute -left-4 -right-4 bottom-px" />
          )}
        </Link>
      </div>

      <div className="pc:hidden flex flex-center">
        <Link className="text-black font-medium order-3" to="/">
          <img
            className="w-24 z-10"
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
        <MenuIcon className="text-28" />
      </div>

      <div
        className={classNames(
          'mb:hidden flex absolute mui-fixed right-0 mb top-0 mt-8 mr-10 ',
          'text-link text-16',
          langService.en && 'font-kanit',
        )}
      >
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
            {langName.en}
            {langService.en && (
              <Check className="text-link" />
            )}
          </MenuItem>
          <MenuItem onClick={() => handleSwitchLang('zh-tw')}>
            {langName['zh-tw']}
            {langService.zh && (
              <Check className="text-link" />
            )}
          </MenuItem>
        </Menu>

        <ThemeLight>
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
                <ListItem className="py-4" button>
                  <div className="w-full flex flex-center">
                    <Link className="relative text-black font-medium relative" to="/">
                      <img
                        className="w-30 relative z-10"
                        src={RumLogo}
                        alt=""
                        draggable="false"
                      />
                      {!!matchPath('/', location.pathname) && (
                        <div className="bg-main h-[2px] absolute -left-4 -right-4 bottom-px" />
                      )}
                    </Link>
                  </div>
                </ListItem>
                <Divider className="my-2" />
                {links.map((v) => (
                  <ListItem
                    className="py-3"
                    button
                    key={v.to}
                    onClick={() => navigate(v.to)}
                  >
                    <LinkItem className="mx-4 py-1" item={v} key={v.to} />
                  </ListItem>
                ))}
                <Divider className="my-2" />
                <ListItem
                  className={classNames(
                    'justify-end px-5',
                    langService.en && 'font-kanit',
                  )}
                  button
                  onClick={() => handleSwitchLang('en')}
                >
                  {langService.en && (
                    <Check className="text-link" />
                  )}
                  <Language className="mr-[6px] text-22" />
                  {langName.en}
                </ListItem>
                <ListItem
                  className={classNames(
                    'justify-end px-5 py-4',
                    langService.en && 'font-kanit',
                  )}
                  button
                  onClick={() => handleSwitchLang('zh-tw')}
                >
                  {langService.zh && (
                    <Check className="text-link" />
                  )}
                  <Language className="mr-[6px] text-22" />
                  {langName['zh-tw']}
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </ThemeLight>
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
      'relative text-black font-medium font-kanit tracking-wide text-20 hover:no-underline mb-[2px]',
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
