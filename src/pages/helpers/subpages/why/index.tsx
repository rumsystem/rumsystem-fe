import React from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import { ImgBox } from '~/components/ImgBox';
import { langService, titleService } from '~/service';

import { lang } from '../../lang';

import WhyRum from './icons/Illustration_why_rum.svg';
// import IconFaq from './icons/icon_faq.svg';

export const HomepageWhy = observer(() => {
  titleService.useSetTitle('Why Rum');

  return (
    <div className="main-box flex-col flex-1 items-stretch">
      <div className="flex flex-none justify-center bg-black bg-opacity-70 px-5 my-16">
        <div
          className={classNames(
            'flex mb:flex-col flex-center max-w-[1200px] grow pt-10 pb-14',
            langService.en && 'font-consolas',
          )}
        >
          <div className="flex-col flex-none mb:w-full">
            <ImgBox
              className="flex-none self-center -translate-x-7 mb:translate-x-0 mb:max-w-[400px] mb:h-auto pc:mr-2"
              src={WhyRum}
              width="349.602"
              height="309.172"
              alt=""
            />
            <div className="">
              <div className="font-kanit italic text-23 text-main">
                {lang.why.title}
              </div>
              <div className="text-18 mt-4 text-white font-bold font-consolas">
                {lang.why.subtitle}
              </div>
            </div>
          </div>
          <div
            className={classNames(
              'grow mb:flex-none gap-x-16 mt-2 text-gray-d1 leading-lang',
              langService.en && 'text-15',
            )}
          >
            {lang.why.content.map((v, i) => (
              <p className="mt-5" key={i}>
                {v}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="flex-col justify-center bg-black bg-opacity-70 max-w-[1000px] w-full mt-10 mb-12 mx-auto px-6 pb-6 font-kanit">
        <div className="flex flex-center italic text-23 text-main mb-1">
          <ImgBox
            className="mr-6 -translate-y-3"
            src={IconFaq}
            alt=""
            width={41}
            height={70}
          />
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
      </div> */}
    </div>
  );
});
