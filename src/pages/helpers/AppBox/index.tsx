import React from 'react';
import classNames from 'classnames';

import RumLogo from '~/icons/logo.png';
import RumLogo2x from '~/icons/logo@2x.png';
import RumLogo3x from '~/icons/logo@3x.png';
import IconAndroid from '~/icons/icon_os_android.svg';
import IconLinux from '~/icons/icon_os_linux.svg';
import IconMac from '~/icons/icon_os_mac.svg';
import IconWin from '~/icons/icon_os_win.svg';

import { lang } from '../lang';

import './index.local.sass';

interface Props {
  className?: string
}

export const AppBox = (props: Props) => (
  <div
    className={classNames(
      'app-box p-14 text-kanit mb:px-6',
      props.className,
    )}
  >
    <div className="flex mb:flex-col flex-center gap-x-12">
      <img className="flex-none w-15 h-auto" src={RumLogo} srcSet={`${RumLogo2x} 2x, ${RumLogo3x} 3x,`} alt="" />
      <div className="flex-col flex-center gap-y-1 text-24 mb:mt-4">
        <div className="text-main">
          {lang.appBox.title}
        </div>
        <div className="mb:text-center tracking-wide text-white">
          {lang.appBox.content.map((v, i) => (
            <React.Fragment key={i}>
              {v.type === 'light' && (
                <span className="font-extralight">
                  {v.text}
                </span>
              )}
              {v.type === '' && (
                <span>
                  {v.text}
                </span>
              )}
            </React.Fragment>))}
        </div>
        <div className="text-16 text-link-soft hover:text-main font-light cursor-pointer mt-2">
          {lang.appBox.previous}
        </div>
      </div>
    </div>

    <div className="grid grid-cols-4 mb:grid-cols-2 gap-y-8 justify-around mx-auto max-w-[700px] mt-14">
      {[
        { icon: IconWin, text: 'Windows', version: 'v0.0.1' },
        { icon: IconLinux, text: 'Linux', version: 'v0.0.1' },
        { icon: IconMac, text: 'macOS', version: 'v0.0.1' },
        { icon: IconAndroid, text: 'Android', version: 'v0.0.1' },
      ].map((v, i) => (
        <div className="flex-col flex-center cursor-pointer" key={i}>
          <img className="h-10" src={v.icon} alt="" />
          <div className="mt-2 font-light text-20 text-link-soft">
            {v.text}
          </div>
          <div className="mt-1 font-light text-14 text-gray-b0">
            {v.version}
          </div>
        </div>
      ))}
    </div>
  </div>

);
