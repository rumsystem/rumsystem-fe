import React from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import IconNode from '~/icons/icon_node.svg';
import IconGithub from '~/icons/icon_github.svg';
import IconLinkServer from '~/icons/icon_link_server.svg';
import IconLinkExample from '~/icons/icon_link_example.svg';
import IconLinkLangauge from '~/icons/icon_link_language.svg';
import IconLinkDocs from '~/icons/icon_link_docs.svg';
import IconEslint from '~/icons/icon_eslint.svg';
import { langService, titleService } from '~/service';

import { lang } from '../../lang';
import IconQuorum from './icons/Illustration_QuoRum.svg';
import IconRumApp from './icons/Illustration_RumApp.svg';

export const HomepageDevelopers = observer(() => {
  titleService.useSetTitle('Developers');

  return (
    <div className="main-box flex-col justify-center items-stretch pb-24">
      <div className="w-full max-w-[1200px] bg-black bg-opacity-70 px-5 mx-auto">
        <div
          className={classNames(
            'flex mb:flex-col items-stretch w-full max-w-[1050px] mx-auto py-15',
            langService.en && 'font-kanit',
            langService.zh && 'font-tw-kanit',
          )}
        >
          <div className="grow pc:w-0 border border-gray-83 pt-8 pb-16 px-10 mb:px-6 pc:mr-5">
            <div className="text-23 text-main italic traicking-wide text-center">
              {lang.developers.quorum.title}
            </div>
            <div
              className={classNames(
                'text-gray-d1 leading-lang mt-7',
                langService.en && 'font-consolas text-15',
              )}
            >
              {lang.developers.quorum.desc.map((v, i) => (
                <p className="mt-4" key={i}>
                  {v}
                </p>
              ))}
            </div>
            <div className="h-16 relative">
              <img className="absolute right-0 xs:-right-1 top-4" src={IconQuorum} alt="" />
            </div>
            <div className="flex-col items-start font-kanit font-light text-18 relative z-10">
              {[
                {
                  link: 'https://rumsystem.github.io/quorum-api/',
                  image: IconGithub,
                  text: lang.developers.quorum.links.api,
                },
                {
                  link: 'https://github.com/rumsystem/quorum#run-a-rum-peer',
                  image: IconNode,
                  text: lang.developers.quorum.links.runPeer,
                },
                {
                  link: 'https://github.com/rumsystem/quorum#example-a-private-decentralized-forum',
                  image: IconLinkExample,
                  text: lang.developers.quorum.links.example,
                },
                {
                  link: 'https://github.com/rumsystem/quorum#run-a-rum-peer-on-server',
                  image: IconLinkServer,
                  text: lang.developers.quorum.links.runOnServer,
                },
              ].map((v, i) => (
                <a
                  className={classNames(
                    'inline-flex flex-center group text-link-soft hover:text-main',
                    i !== 0 && 'mt-5',
                  )}
                  href={v.link}
                  target="_blank"
                  key={i}
                >
                  <img
                    className="w-[18px] flex-none mr-3 group-hover:hover-orange"
                    src={v.image}
                    alt=""
                  />
                  {v.text}
                </a>
              ))}
            </div>
          </div>

          <div className="grow pc:w-0 border border-gray-83 pt-8 pb-16 px-10 mb:px-6 mb:mt-8">
            <div className="text-23 text-main italic traicking-wide text-center">
              {lang.developers.rumApp.title}
            </div>
            <div
              className={classNames(
                'text-gray-d1 leading-lang mt-7',
                langService.en && 'font-consolas text-15',
              )}
            >

              {lang.developers.rumApp.desc.map((v, i) => (
                <p className="mt-4" key={i}>
                  {v}
                </p>
              ))}
            </div>
            <div className="h-16 relative">
              <img className="absolute top-4 right-0 xs:-right-1" src={IconRumApp} alt="" />
            </div>
            <div className="flex-col items-start font-kanit font-light text-18 relative z-10">
              {[
                {
                  link: 'https://github.com/rumsystem/rum-app',
                  image: IconGithub,
                  text: lang.developers.rumApp.links.start,
                },
                {
                  link: 'https://docs.prsdev.club/#/rum-app/',
                  image: IconLinkDocs,
                  text: lang.developers.rumApp.links.docs,
                },
                {
                  link: 'https://github.com/rumsystem/rum-app/blob/main/src/utils/lang/cn.ts',
                  image: IconLinkLangauge,
                  text: lang.developers.rumApp.links.i18n,
                },
                {
                  link: 'https://github.com/rumsystem/rum-app/blob/main/docs/lint.md',
                  image: IconEslint,
                  text: lang.developers.rumApp.links.eslint,
                },
              ].map((v, i) => (
                <a
                  className={classNames(
                    'inline-flex flex-center group text-link-soft hover:text-main',
                    i !== 0 && 'mt-5',
                  )}
                  href={v.link}
                  target="_blank"
                  key={i}
                >
                  <img
                    className="w-[18px] flex-none mr-3 group-hover:hover-orange"
                    src={v.image}
                    alt=""
                  />
                  {v.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
