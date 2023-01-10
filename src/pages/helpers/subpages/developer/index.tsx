import React from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import LinkExternalIcon from 'boxicons/svg/regular/bx-link-external.svg?fill-icon';
import QrIcon from 'boxicons/svg/regular/bx-qr.svg?fill-icon';

import IconGithub from '~/icons/icon_github.svg';
import IconLinkExample from '~/icons/icon_link_example.svg';
import IconLinkLangauge from '~/icons/icon_link_language.svg';
import IconLinkDocs from '~/icons/icon_link_docs.svg';
import IconEslint from '~/icons/icon_eslint.svg';
import { langService, titleService } from '~/service';

import { lang } from '../../lang';
import IconQuorum from './icons/Illustration_QuoRum.svg';
import IconRumApp from './icons/Illustration_RumApp.svg';
import { ChevronRight } from '@mui/icons-material';
import { Button } from '@mui/material';

export const HomepageDevelopers = observer(() => {
  titleService.useSetTitle('Developers');

  return (
    <div className="main-box flex-col justify-center items-stretch pb-24">
      <div className="w-full bg-black/70 mx-auto">
        <div className="w-full max-w-[1050px] px-5 py-7 mx-auto">
          <div className="flex gap-y-4 mb:flex-col justify-around items-center mt-10 mb:mt-4">
            <div className="text-main text-24">
              {lang.developers.docs.intro.left}
            </div>
            <div className="text-gray-d1 text-16 max-w-[420px]">
              {lang.developers.docs.intro.right}
            </div>
          </div>
          <div className="grid grid-cols-2 mb:grid-cols-1 gap-4 mt-16 mb:mt-10">
            {lang.developers.docs.sections.map((v, i) => (
              <a
                className="!no-underline"
                href={[
                  'https://docs.rumsystem.net/',
                  'https://github.com/rumsystem/',
                  'https://docs.rumsystem.net/#sdk',
                  'https://port.base.one/rumdevclub',
                  'https://docs.rumsystem.net/rest-api/',
                  'https://mixin.one/codes/ccfe695c-fff0-46ff-b1d1-54069c9a04ff',
                ][i]}
                target="_blank"
                rel="noopener"
                key={i}
              >
                <Button
                  className={classNames(
                    'flex items-center pb-4 pt-3 px-6 border border-white/40 h-full',
                    'font-light normal-case rounded-none font-default text-start',
                  )}
                  variant="outlined"
                >
                  <div className="flex-1 flex-col h-full">
                    <div className="text-link-soft text-18">
                      {v.title}
                      {i === 5 && (
                        <QrIcon className="inline ml-1 text-24 text-white" />
                      )}
                    </div>
                    <div className="flex items-center mt-1 flex-1 pl-10 text-14 text-gray-b0">
                      {v.desc}
                    </div>
                  </div>
                  <div className="flex-none pl-4">
                    <ChevronRight className="text-gray-b0" />
                  </div>
                </Button>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1200px] bg-black/70 px-5 mx-auto mt-12">
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
                  image: IconLinkExample,
                  text: lang.developers.quorum.links.api,
                },
                {
                  link: 'https://github.com/rumsystem/quorum',
                  image: IconGithub,
                  text: lang.developers.quorum.links.github,
                },
                {
                  link: 'https://github.com/rumsystem/quorum#run-a-rum-peer',
                  text: lang.developers.quorum.links.runPeer,
                },
                {
                  link: 'https://github.com/rumsystem/quorum#example-a-private-decentralized-forum',
                  text: lang.developers.quorum.links.example,
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
                  {i < 2 && <LinkExternalIcon className="ml-1" />}
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
                  <LinkExternalIcon className="ml-1" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
