import React from 'react';
import { observer } from 'mobx-react-lite';

import IconCoin from '~/icons/icon_coin.svg';
import { useSetTitle } from '~/utils';

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
      <div className="flex flex-1 justify-center bg-black bg-opacity-70 px-5">
        <div className="max-w-[1000px] py-12 flex-1 text-14 text-consolas">
          <div className="flex mb:flex-col gap-y-6 gap-x-20">
            <div className="flex-none text-main text-main text-kanit italic text-23 tracking-wide">
              {lang.network.rumeco}
            </div>
            <div className="text-gray-d1 text-consolas leading-tight text-16">
              {lang.network.ecoContent}
            </div>
          </div>

          <div className="flex mb:flex-col gap-y-10 gap-x-8 border border-gray-83 p-8 mt-12">
            <img className="flex-none self-end mr-4 mb-3 mb:order-2" src={IconNTF} alt="" />
            {[lang.network.box1, lang.network.box2].map((v, i) => (
              <div className="mb:order-1 flex-1" key={i}>
                <div className="text-20 text-kanit text-white tracking-wide">
                  {v.title}
                </div>
                <div className="text-16 text-consolas text-gray-d1 leading-tight mt-3">
                  {v.content}
                </div>
                <div className="text-16 text-kanit text-gray-d1 mt-4">
                  <a className="inline-flex text-link-soft hover:text-main text-18 font-light tracking-wider" href="">
                    <img className="mr-3 self-center" src={IconCoin} alt="" />
                    {v.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1200px] bg-black bg-opacity-70 px-5 mt-15 mb:mt-12 mx-auto">
        <div className="w-full max-w-[1000px] mx-auto px-5 pt-10 pb-14 text-kanit">
          <div className="ml-4 flex-1 text-23 text-main italic">
            {lang.network.token}
          </div>
          <div className="mt-4 border border-gray-83 py-4 px-5">
            <div className="text-link-soft font-light text-18 tracking-wide">
              {lang.network.tokenQ}
            </div>
            <div className="flex mb:flex-col gap-y-8 gap-x-7 text-consolas mt-4">
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
              <img className="self-start" src={IconRumToken} alt="" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
});
