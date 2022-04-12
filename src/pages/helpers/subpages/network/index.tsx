import React from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import IconCoin from '~/icons/icon_coin.svg';
import { useSetTitle } from '~/utils';

import { ImgBox } from '~/components/ImgBox';
import { langService } from '~/service';

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
            'max-w-[1000px] py-12',
            langService.en && 'font-consolas',
          )}
        >
          <div className="flex mb:flex-col">
            <div className="flex flex-center pc:pb-12 mb:pb-8 pc:mr-20 flex-none text-main text-main font-kanit italic text-23 tracking-wide">
              {lang.network.rumeco}
            </div>
            <div
              className={classNames(
                'text-gray-d1 leading-lang -mt-2',
                langService.en && 'font-consolas text-15',
              )}
            >
              {lang.network.ecoContent.map((v, i) => (
                <p className="mt-4" key={i}>{v}</p>
              ))}
            </div>
          </div>

          <div className="flex mb:flex-col border border-gray-83 p-8 mt-12">
            <ImgBox
              className="flex-none self-end mr-4 pc:mb-12 mb:mb-3 mb:order-2"
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
                    langService.en && 'font-kanit',
                  )}
                >
                  {v.title}
                </div>
                <div
                  className={classNames(
                    'text-gray-d1 leading-lang mt-2',
                    langService.en && 'font-consolas text-15',
                  )}
                >
                  {v.content.map((v, i) => (
                    <p className="mt-4" key={i}>
                      {v}
                    </p>
                  ))}
                </div>
                {i === 0 && (
                  <div
                    className={classNames(
                      'text-16 text-gray-d1 mt-4',
                      langService.en && 'font-kanit',
                    )}
                  >
                    <span
                      className={classNames(
                        'inline-flex group text-link-soft hover:text-main font-light tracking-wider cursor-pointer',
                        langService.en && 'text-16',
                        langService.zh && 'text-18',
                      )}
                    >
                      <img className="mr-3 self-center group-hover:hover-orange" src={IconCoin} alt="" />
                      <span>
                        {lang.network.link.map((l, li) => (
                          <span
                            className={classNames(
                              l.type.includes('small') && langService.en && 'text-13',
                              l.type.includes('small') && langService.zh && 'text-14',
                            )}
                            key={li}
                          >
                            {l.text}
                          </span>
                        ))}
                      </span>
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
              langService.en && 'font-kanit',
              langService.zh && 'font-tw-kanit',
            )}
            >
              {lang.network.tokenQ}
            </div>
            <div
              className={classNames(
                'flex mb:flex-col mt-5',
                langService.en && 'font-consolas',
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
                  <div
                    className={classNames(
                      'mt-2 text-gray-d1',
                      langService.en && 'text-15',
                    )}
                  >
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
