import React from 'react';
import { observer } from 'mobx-react-lite';

import { useSetTitle } from '~/utils';

import { lang } from '../../lang';

import WhyRum from './icons/Illustration_why_rum.svg';
import IconFaq from './icons/icon_faq.svg';

export const HomepageWhy = observer(() => {
  lang.useLang();
  useSetTitle('Why Rum');

  if (!lang.ready) {
    return null;
  }

  return (
    <div className="main-box flex-col justify-center items-stretch">
      <div className="flex flex-1 justify-center bg-black bg-opacity-70 px-5">
        <div className="flex mb:flex-col gap-x-2 flex-center max-w-[1000px] flex-1 text-14 pt-10 pb-14 text-consolas">
          <div className="flex-col flex-none mb:w-full">
            <img className="flex-none -translate-x-7 mb:translate-x-0" src={WhyRum} alt="" />
            <div className="">
              <div className="text-kanit italic text-23 text-main">
                {lang.why.title}
              </div>
              <div className="text-18 mt-4 text-white font-bold ">
                {lang.why.subtitle}
              </div>
            </div>
          </div>
          <div className="flex flex-1 gap-x-16 mt-2 text-gray-d1 text-16 leading-tight">
            <div className="flex-1">
              {lang.why.content.map((v, i) => (
                <p className="mt-5" key={i}>
                  {v}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col justify-center bg-black bg-opacity-70 max-w-[1000px] w-full mt-10 mb-12 mx-auto px-6 pb-6 text-kanit">
        <div className="flex flex-center italic text-23 text-main mb-1">
          <img className="mr-6 -translate-y-3" src={IconFaq} alt="" />
          {lang.why.faq}
        </div>
        <div className="border border-gray-83 divide-y divide-gray-83">
          {lang.why.faqs.map((v, i) => (
            <div className="flex mb:flex-col gap-y-4 gap-x-12 px-8 py-6 font-light" key={i}>
              <div className="tracking-wide text-18 text-link-soft flex-1 max-w-[200px]">
                {v.q}
              </div>
              <div className="text-14 text-gray-b0 flex-1">
                {v.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
