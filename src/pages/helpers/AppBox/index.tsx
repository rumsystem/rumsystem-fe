import React from 'react';
import classNames from 'classnames';

import RumLogo from '~/icons/logo.png';
import RumLogo2x from '~/icons/logo@2x.png';
import RumLogo3x from '~/icons/logo@3x.png';
import IconAndroid from '~/icons/icon_os_android.svg';
import IconLinux from '~/icons/icon_os_linux.svg';
import IconMac from '~/icons/icon_os_mac.svg';
import IconWin from '~/icons/icon_os_win.svg';

import './index.local.sass';

interface Props {
  className?: string
}

export const AppBox = (props: Props) => (
  <div
    className={classNames(
      'app-box p-14 text-kanit',
      props.className,
    )}
  >
    <div className="flex flex-center gap-x-12">
      <img className="flex-none w-15 h-auto" src={RumLogo} srcSet={`${RumLogo2x} 2x, ${RumLogo3x} 3x,`} alt="" />
      <div className="flex-col flex-center gap-y-1 text-24">
        <div className="text-main">
          Download Rum App
        </div>
        <div className="font-extralight tracking-wide text-white">
          Join as a
          <span className="font-normal">{' '}Node{' '}</span>
          of an
          <span className="font-normal">{' '}alternative World{' '}</span>
        </div>
        <div className="text-16 text-link-soft hover:text-main font-light cursor-pointer mt-2">
          View previous versions
        </div>
      </div>
    </div>

    <div className="flex justify-around mx-auto max-w-[700px] mt-14">
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
