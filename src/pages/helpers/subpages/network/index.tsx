import React from 'react';
import { observer } from 'mobx-react-lite';

import IconCoin from '~/icons/icon_coin.svg';
import { useSetTitle } from '~/utils';

import { lang } from '../../lang';
import IconNTF from './icons/Illustration_NFT.svg';
import IconRumToken from './icons/Illustration_Rum_Token.svg';
import { ImgBox } from '~/components/ImgBox';

export const HomepageNetwork = observer(() => {
  lang.useLang();
  useSetTitle('Token & Eco');

  if (!lang.ready) {
    return null;
  }

  return (
    <div className="main-box flex-col justify-center items-stretch pb-20">
      <div className="flex flex-1 justify-center bg-black bg-opacity-70 px-5">
        <div className="max-w-[1000px] py-12 flex-1 text-14 font-consolas">
          <div className="flex mb:flex-col gap-y-6 gap-x-20">
            <div className="flex flex-center pb-12 flex-none text-main text-main font-kanit italic text-23 tracking-wide">
              {lang.network.rumeco}
            </div>
            <div className="text-gray-d1 font-consolas leading-lang text-16 -mt-2">
              {lang.network.ecoContent.map((v, i) => (
                <p className="mt-2" key={i}>{v}</p>
              ))}
            </div>
          </div>

          <div className="flex mb:flex-col gap-y-10 gap-x-8 border border-gray-83 p-8 mt-12">
            <ImgBox className="flex-none self-end mr-4 mb-3 mb:order-2 mb:-mt-4" src={IconNTF} alt="" width={169} height={126} />
            {[lang.network.box1, lang.network.box2].map((v, i) => (
              <div className="mb:order-1 flex-1" key={i}>
                <div className="text-20 font-kanit text-white tracking-wide">
                  {v.title}
                </div>
                <div className="text-16 font-consolas text-gray-d1 leading-lang mt-2">
                  {v.content.map((v, i) => (
                    <p className="mt-2" key={i}>
                      {v}
                    </p>
                  ))}
                </div>
                {!!v.link && (
                  <div className="text-16 font-kanit text-gray-d1 mt-4">
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
        <div className="w-full max-w-[1000px] mx-auto px-5 pt-10 pb-14 font-kanit">
          <div className="ml-4 flex-1 text-23 text-main italic">
            {lang.network.token}
          </div>
          <div className="mt-4 border border-gray-83 py-6 px-7">
            <div className="text-link-soft font-light text-18 tracking-wide">
              {lang.network.tokenQ}
            </div>
            <div className="flex mb:flex-col gap-y-8 gap-x-7 font-consolas mt-4">
              {lang.network.tokenA.map((v, i) => (
                <div className="flex-1" key={i}>
                  <div className="text-20 text-white font-bold">
                    {v.title}
                  </div>
                  <div className="mt-1 text-gray-d1">
                    {v.content}
                  </div>
                </div>
              ))}
              <ImgBox className="self-start" src={IconRumToken} alt="" width={116} height={215} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
