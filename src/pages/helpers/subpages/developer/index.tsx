import React from 'react';

import IconNode from '~/icons/icon_node.svg';
import IconGithub from '~/icons/icon_github.svg';
import IconLinkServer from '~/icons/icon_link_server.svg';
import IconLinkExample from '~/icons/icon_link_example.svg';
import IconLinkLangauge from '~/icons/icon_link_language.svg';
import IconLinkDocs from '~/icons/icon_link_docs.svg';
import IconEslint from '~/icons/icon_eslint.svg';
import { lang } from '../../lang';
import IconQuorum from './icons/Illustration_QuoRum.svg';
import IconRumApp from './icons/Illustration_RumApp.svg';

export const HomepageDevelopers = () => {
  lang.useLang();

  if (!lang.ready) {
    return null;
  }

  return (
    <div className="main-box flex-col justify-center items-stretch pb-20">
      <div className="w-full max-w-[1200px] bg-black bg-opacity-70 px-5 mx-auto">
        <div className="flex items-start gap-x-12 w-full max-w-[1000px] mx-auto py-14 text-kanit">
          <div className="flex-1 border border-gray-83 pt-8 pb-16 px-10">
            <div className="text-23 text-main italic traicking-wide text-center">
              QuoRum
            </div>
            <div className="text-consolas text-gray-d1 leading-tight mt-8">
              RUM: The internet alternatives
              <br />
              An open source peer-to-peer application infrastructure to offer the internet alternatives in a decentralized and privacy oriented way.
            </div>
            <div className="h-16 mt-4 relative">
              <img className="absolute right-0" src={IconQuorum} alt="" />
            </div>
            <div className="flex-col items-start text-kanit font-light text-18 gap-y-5 relative z-10">
              <a className="inline-flex flex-center text-link-soft hover:text-main" href="">
                <img className="w-[18px] flex-none mr-4" src={IconGithub} alt="" />
                Build API Document
              </a>
              <a className="inline-flex flex-center text-link-soft hover:text-main" href="">
                <img className="w-[18px] flex-none mr-4" src={IconNode} alt="" />
                Run a RUM peer
              </a>
              <a className="inline-flex flex-center text-link-soft hover:text-main" href="">
                <img className="w-[18px] flex-none mr-4" src={IconLinkExample} alt="" />
                Example
              </a>
              <a className="inline-flex flex-center text-link-soft hover:text-main" href="">
                <img className="w-[18px] flex-none mr-4" src={IconLinkServer} alt="" />
                Run a RUM peer on server
              </a>
            </div>
          </div>

          <div className="flex-1 border border-gray-83 pt-8 pb-16 px-10">
            <div className="text-23 text-main italic traicking-wide text-center">
              RumApp
            </div>
            <div className="text-consolas text-gray-d1 leading-tight mt-8">
              Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="h-16 mt-4 relative">
              <img className="absolute right-0" src={IconRumApp} alt="" />
            </div>
            <div className="flex-col items-start text-kanit font-light text-18 gap-y-5 relative z-10">
              <a className="inline-flex flex-center text-link-soft hover:text-main" href="">
                <img className="w-[18px] flex-none mr-4" src={IconGithub} alt="" />
                Start
              </a>
              <a className="inline-flex flex-center text-link-soft hover:text-main" href="">
                <img className="w-[18px] flex-none mr-4" src={IconLinkDocs} alt="" />
                Docs
              </a>
              <a className="inline-flex flex-center text-link-soft hover:text-main" href="">
                <img className="w-[18px] flex-none mr-4" src={IconLinkLangauge} alt="" />
                MultiMate Language i18n
              </a>
              <a className="inline-flex flex-center text-link-soft hover:text-main" href="">
                <img className="w-[18px] flex-none mr-4" src={IconEslint} alt="" />
                ESLint
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
