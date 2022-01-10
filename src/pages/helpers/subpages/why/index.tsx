import React from 'react';

import { lang } from '../../lang';

import WhyRum from './icons/Illustration_why_rum.svg';
import IconFaq from './icons/icon_faq.svg';

export const HomepageWhy = () => {
  lang.useLang();

  if (!lang.ready) {
    return null;
  }

  return (
    <div className="main-box flex-col justify-center items-stretch">
      <div className="flex flex-1 justify-center bg-black bg-opacity-70 px-5">
        <div className="flex gap-x-2 flex-center max-w-[1000px] flex-1 text-14 pt-10 pb-14 text-consolas">
          <div className="flex-col flex-none">
            <img className="flex-none -translate-x-7" src={WhyRum} alt="" />
            <div className="">
              <div className="text-kanit italic text-23 text-main">
                Why Rum
              </div>
              <div className="text-18 mt-4 text-white font-bold ">
                The internet is broken.
              </div>
            </div>
          </div>
          <div className="flex gap-x-16 mt-7 text-gray-d1 text-16 leading-tight">
            <div className="flex-1">
              Technology monopoly, especially social network monopoly, has become a worldwide problem. In the United States and the EU, technology companies have caused a lot of disputes over privacy and user data ownership issues. Criticism of traditional Internet platforms has long been a mainstream voice in various countries.
              <br />
              <br />
              Almost all online services are running on Client-Server architecture, which means all users' activities and data will be stored in centralized servers. User's data always be controlled by service providers not themself, this made the internet centralized by nature.
              <br />
              <br />
              People urgently need an innovative model that no longer adopts the "privacy for advertising" mode: a new type of network system where data is owned by users and has a special way to distribute traffic without being controlled by the enterprise.
              <br />
              <br />
              RUM uses a different approach to rebuild the online service. Users will control their own data and interact with other related users in the peer-to-peer network.
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col justify-center bg-black bg-opacity-70 max-w-[1000px] mt-10 mb-12 mx-auto px-6 pb-6 text-kanit">
        <div className="flex flex-center italic text-23 text-main mb-1">
          <img className="mr-6 -translate-y-3" src={IconFaq} alt="" />
          FAQ
        </div>
        <div className="border border-gray-83 divide-y divide-gray-83">
          {Array(4).fill(0).map((v, i) => (
            <div className="flex gap-x-12 px-8 py-6 font-light" key={i}>
              <div className="tracking-wide text-18 text-link-soft flex-1 max-w-[200px]">
                Ut enim ad minim veniam quis nostrud?
              </div>
              <div className="text-14 text-gray-b0 flex-1">
                Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
