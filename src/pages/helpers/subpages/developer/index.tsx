import React from 'react';
import { observer } from 'mobx-react-lite';

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

export const HomepageDevelopers = observer(() => {
  lang.useLang();

  if (!lang.ready) {
    return null;
  }

  return (
    <div className="main-box flex-col justify-center items-stretch pb-20">
      <div className="w-full max-w-[1200px] bg-black bg-opacity-70 px-5 mx-auto">
        <div className="flex mb:flex-col items-start mb:items-stretch gap-y-8 gap-x-12 w-full max-w-[1000px] mx-auto py-14 text-kanit">
          <div className="flex-1 border border-gray-83 pt-8 pb-16 px-10 mb:px-6">
            <div className="text-23 text-main italic traicking-wide text-center">
              {lang.developers.quorum.title}
            </div>
            <div className="text-consolas text-gray-d1 leading-tight mt-7">
              {lang.developers.quorum.desc.map((v, i) => (
                <p className="mt-1" key={i}>
                  {v}
                </p>
              ))}
            </div>
            <div className="h-16 mt-4 relative">
              <img className="absolute right-0" src={IconQuorum} alt="" />
            </div>
            <div className="flex-col items-start text-kanit font-light text-18 gap-y-5 relative z-10">
              <a className="inline-flex flex-center text-link-soft hover:text-main" href="">
                <img className="w-[18px] flex-none mr-4" src={IconGithub} alt="" />
                {lang.developers.quorum.links.api}
              </a>
              <a className="inline-flex flex-center text-link-soft hover:text-main" href="">
                <img className="w-[18px] flex-none mr-4" src={IconNode} alt="" />
                {lang.developers.quorum.links.runPeer}
              </a>
              <a className="inline-flex flex-center text-link-soft hover:text-main" href="">
                <img className="w-[18px] flex-none mr-4" src={IconLinkExample} alt="" />
                {lang.developers.quorum.links.example}
              </a>
              <a className="inline-flex flex-center text-link-soft hover:text-main" href="">
                <img className="w-[18px] flex-none mr-4" src={IconLinkServer} alt="" />
                {lang.developers.quorum.links.runOnServer}
              </a>
            </div>
          </div>

          <div className="flex-1 border border-gray-83 pt-8 pb-16 px-10 mb:px-6">
            <div className="text-23 text-main italic traicking-wide text-center">
              {lang.developers.rumApp.title}
            </div>
            <div className="text-consolas text-gray-d1 leading-tight mt-8">

              {lang.developers.rumApp.desc.map((v, i) => (
                <p className="mt-1" key={i}>
                  {v}
                </p>
              ))}
            </div>
            <div className="h-16 mt-4 relative">
              <img className="absolute right-0" src={IconRumApp} alt="" />
            </div>
            <div className="flex-col items-start text-kanit font-light text-18 gap-y-5 relative z-10">
              <a className="inline-flex flex-center text-link-soft hover:text-main" href="">
                <img className="w-[18px] flex-none mr-4" src={IconGithub} alt="" />
                {lang.developers.rumApp.links.start}
              </a>
              <a className="inline-flex flex-center text-link-soft hover:text-main" href="">
                <img className="w-[18px] flex-none mr-4" src={IconLinkDocs} alt="" />
                {lang.developers.rumApp.links.docs}
              </a>
              <a className="inline-flex flex-center text-link-soft hover:text-main" href="">
                <img className="w-[18px] flex-none mr-4" src={IconLinkLangauge} alt="" />
                {lang.developers.rumApp.links.i18n}
              </a>
              <a className="inline-flex flex-center text-link-soft hover:text-main" href="">
                <img className="w-[18px] flex-none mr-4" src={IconEslint} alt="" />
                {lang.developers.rumApp.links.eslint}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
