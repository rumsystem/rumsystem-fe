import React from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';

import { langService, appService } from '~/service';
import RumLogo from '~/icons/logo.png';
import RumLogo2x from '~/icons/logo@2x.png';
import RumLogo3x from '~/icons/logo@3x.png';
import IconAndroid from '~/icons/icon_os_android.svg';
import IconLinux from '~/icons/icon_os_linux.svg';
import IconMac from '~/icons/icon_os_mac.svg';
import IconWin from '~/icons/icon_os_win.svg';

import { lang } from '../lang';

import './index.sass';

interface Props {
  className?: string
}

export const AppBox = observer((props: Props) => {
  React.useEffect(() => {
    appService.getVersion();
  }, []);

  return (
    <div
      className={classNames(
        'app-box p-14 mb:px-6',
        props.className,
        langService.en && 'font-kanit',
      )}
    >
      <div className="flex mb:flex-col flex-center">
        <img
          className="flex-none w-15 h-auto pc:mr-12"
          src={RumLogo}
          srcSet={`${RumLogo2x} 2x, ${RumLogo3x} 3x,`}
          alt=""
        />
        <div className="flex-col flex-center text-24 mb:mt-4">
          <div className="text-main font-tw-kanit">
            {lang.appBox.title}
          </div>
          <div className="mb:text-center tracking-wide text-white mt-1">
            {lang.appBox.content.map((v, i) => (
              <span
                className={classNames(
                  v.type.includes('light') && 'font-extralight',
                  v.type.includes('bold') && 'font-bold',
                )}
                key={i}
              >
                {v.text}
              </span>
            ))}
          </div>
          {/* <div className="text-16 text-link-soft hover:text-main font-light cursor-pointer mt-2">
            {lang.appBox.previous}
          </div> */}
        </div>
      </div>

      <div className="grid grid-cols-4 mb:grid-cols-2 gap-y-8 justify-around mx-auto max-w-[700px] mt-14">
        {[
          {
            icon: IconWin,
            text: 'Windows',
            version: appService.state.rumAppVersion,
            link: appService.state.rumAppWinLink,
            loading: appService.state.rumAppLoading,
          },
          {
            icon: IconLinux,
            text: 'Linux',
            version: appService.state.rumAppVersion,
            link: appService.state.rumAppLinuxLink,
            loading: appService.state.rumAppLoading,
          },
          {
            icon: IconMac,
            text: 'macOS',
            version: appService.state.rumAppVersion,
            link: appService.state.rumAppMacLink,
            loading: appService.state.rumAppLoading,
          },
          {
            icon: IconAndroid,
            text: 'Android',
            version: appService.state.rumAndroidVersion,
            link: appService.state.rumAndroidLink,
            loading: appService.state.rumAndroidLoading,
          },
        ].map((v, i) => (
          <div className="flex flex-center font-kanit" key={i}>
            <a
              className="flex-col flex-center hover:hover-orange px-4 !no-underline"
              href={v.link}
              target="_blank"
              download
            >
              <img className="h-10" src={v.icon} alt="" />
              <div className="mt-2 font-light text-20 text-link-soft">
                {v.text}
              </div>
              <div className="mt-1 font-light text-14 text-gray-b0">
                {v.loading ? '...' : v.version}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
});
