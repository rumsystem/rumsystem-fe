import React from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import IconCoin from '~/icons/icon_coin.svg';
import { useSetTitle } from '~/utils';

import { ImgBox } from '~/components/ImgBox';
import { langService } from '~/service/lang';

import { lang } from '../../lang';
import IconNTF from './icons/Illustration_NFT.svg';
import IconRumToken from './icons/Illustration_Rum_Token.svg';

export const HomepageNetwork = observer(() => {
  lang.useLang();
  useSetTitle('Token & Eco');

  if (!lang.ready) {
    return null;
  }

  return (
    <div className="main-box flex-col justify-center items-stretch pb-20">
      <div className="flex justify-center bg-black bg-opacity-70 px-5">
        <div
          className={classNames(
            'max-w-[1000px] py-12 text-14',
            langService.state.lang === 'en' && 'font-consolas',
          )}
        >
          <div className="flex mb:flex-col">
            <div className="flex flex-center pb-12 pc:mr-20 flex-none text-main text-main font-kanit italic text-23 tracking-wide">
              {lang.network.rumeco}
            </div>
            <div
              className={classNames(
                'text-gray-d1 leading-lang text-16 -mt-2',
                langService.state.lang === 'en' && 'font-consolas',
              )}
            >
              {lang.network.ecoContent.map((v, i) => (
                <p className="mt-4" key={i}>{v}</p>
              ))}
            </div>
          </div>

          <div className="flex mb:flex-col border border-gray-83 p-8 mt-12">
            <ImgBox
              className="flex-none self-end mr-4 mb-3 mb:order-2"
              src={IconNTF}
              width={169}
              height={126}
              alt=""
            />
            {[lang.network.box1, lang.network.box2].map((v, i) => (
              <div
                className={classNames(
                  'mb:order-1 pc:grow pc:w-0 pc:ml-8 mb:mb-10',
                )}
                key={i}
              >
                <div
                  className={classNames(
                    'text-20 text-white tracking-wide',
                    langService.state.lang === 'en' && 'font-kanit',
                  )}
                >
                  {v.title}
                </div>
                <div
                  className={classNames(
                    'text-16 text-gray-d1 leading-lang mt-2',
                    langService.state.lang === 'en' && 'font-consolas',
                  )}
                >
                  {v.content.map((v, i) => (
                    <p className="mt-4" key={i}>
                      {v}
                    </p>
                  ))}
                </div>
                {!!v.link && (
                  <div
                    className={classNames(
                      'text-16 text-gray-d1 mt-4',
                      langService.state.lang === 'en' && 'font-kanit',
                    )}
                  >
                    <span className="inline-flex group text-link-soft hover:text-main text-18 font-light tracking-wider cursor-pointer">
                      <img className="mr-3 self-center group-hover:hover-orange" src={IconCoin} alt="" />
                      {v.link}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1200px] bg-black bg-opacity-70 px-5 mt-15 mb:mt-12 mx-auto">
        <div className="w-full max-w-[1000px] mx-auto pt-10 pb-14">
          <div className="ml-4 text-23 text-main italic font-kanit">
            {lang.network.token}
          </div>
          <div className="mt-4 border border-gray-83 py-6 px-7">
            <div className={classNames(
              'text-link-soft font-light text-18 tracking-wide',
              langService.state.lang === 'en' && 'font-kanit',
              langService.state.lang === 'zh-tw' && 'font-tw-kanit',
            )}
            >
              {lang.network.tokenQ}
            </div>
            <div
              className={classNames(
                'flex mb:flex-col mt-5',
                langService.state.lang === 'en' && 'font-consolas',
              )}
            >
              {lang.network.tokenA.map((v, i) => (
                <div
                  className="pc:flex-1 pc:mr-7 mb:mb-8"
                  key={i}
                >
                  <div className="text-20 text-white font-bold">
                    {v.title}
                  </div>
                  <div className="mt-2 text-gray-d1">
                    {v.content}
                  </div>
                </div>
              ))}
              <ImgBox
                className="self-start"
                src={IconRumToken}
                width={116}
                height={215}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
