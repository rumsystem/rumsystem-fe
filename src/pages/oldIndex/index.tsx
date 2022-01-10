import React from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import { langService } from '~/service/lang';
import RumLogo from '~/icons/logo_rumsystem.svg';

import { lang } from './lang';

import './index.local.sass';

const HomepagePC = observer(() => {
  lang.useLang();

  if (!lang.ready) {
    return null;
  }

  return (
    <div className="homepage-pc flex-1">
      <div className="flex flex-center py-10 relative">
        <img
          className="mb:w-30"
          src={RumLogo}
          alt=""
        />

        <div
          className={classNames(
            'absolute right-0 top-0 mt-10 mr-14 text-link text-16',
            'mb:mt-4 mb:mr-5',
          )}
        >
          <span
            className="cursor-pointer"
            onClick={() => langService.switchLang('en')}
          >
            En
          </span>
          <span className="mx-1">{' | '}</span>
          <span
            className="cursor-pointer"
            onClick={() => langService.switchLang('cn')}
          >
            中文
          </span>
        </div>
      </div>

      <div className="main-box flex justify-center">
        <div className="inner-box flex flex-1 justify-center text-14 text-gray-d1 mx-5">
          <div className="content-box flex-1 px-5 pt-10 pb-24">
            {lang.p.map((v, i) => (
              <React.Fragment key={i}>
                <p className="text-18 text-white mt-10">
                  {v.heading}
                </p>
                {v.paragraph.map((p, pi) => (
                  <p className="mt-5" key={pi}>
                    {p.split('\n').map((pc, pci) => (
                      <span key={pci}>
                        {pc}<br />
                      </span>
                    ))}
                  </p>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});


export default HomepagePC;
