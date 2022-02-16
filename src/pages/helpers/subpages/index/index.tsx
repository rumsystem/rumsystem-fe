import React from 'react';
import { action } from 'mobx';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { Dialog } from '@mui/material';
import { Close } from '@mui/icons-material';

import IconCoin from '~/icons/icon_coin.svg';
import IconNode from '~/icons/icon_node.svg';
import IconGithub from '~/icons/icon_github.svg';
import { useSetTitle } from '~/utils';

import { AppBox } from '../../AppBox';
import { lang } from '../../lang';
import IconDecentralized from './icons/icon_decentralized.svg';
import IconPrivacy from './icons/icon_privacy.svg';
import IconToken from './icons/icon_token.svg';
import ArchDiagram from './icons/arch_diagram.svg';

import './index.local.sass';

export const HomepageIndex = observer(() => {
  const state = useLocalObservable(() => ({
    open: false,
  }));
  lang.useLang();
  useSetTitle('Homepage');

  const handleOpenDialog = action(() => {
    state.open = true;
  });

  const handleCloseDialog = action(() => {
    state.open = false;
  });

  if (!lang.ready) {
    return null;
  }

  return (
    <div className="main-box flex justify-center">
      <div className="flex flex-1 justify-center mx-5 mb:mx-0 mb:mt-0 my-10 px-5 max-w-[1200px] bg-black bg-opacity-70">
        <div className="max-w-[1000px] flex-1 text-16 text-gray-d1 py-16 mb:pt-8 text-kanit">
          <div className="grid gap-x-[10px] gap-y-[10px] grid-cols-2 text-white mb:grid-cols-1">
            <div className="flex flex-center border border-gray-83 p-14 mb:p-4">
              <div className="text-main text-23 italic leading-snug">
                {lang.index.box1.map((v, i) => (
                  <React.Fragment key={i}>
                    {v.type === 'linebreak' && <br />}
                    {v.type === 'light' && (
                      <span className="font-extralight">
                        {v.text}
                      </span>
                    )}
                    {v.type === 'light-small' && (
                      <span className="font-extralight text-17">
                        {v.text}
                      </span>
                    )}
                    {v.type === '' && (
                      <span>
                        {v.text}
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="border border-gray-83 px-8 py-6">
              <div className="flex mb:flex-col flex-center gap-x-6">
                <img className="flex-none mb:mb-4" src={IconDecentralized} alt="" />
                <div className="flex-1">
                  <div className="text-20">
                    {lang.index.box2.title}
                  </div>

                  <div className="text-consolas text-gray-d1 leading-tight mt-2">
                    {lang.index.box2.p.map((v, i) => (
                      <p className="mt-2" key={i}>{v}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-2">
                <a className="flex items-center text-link-soft hover:text-main text-18 font-light tracking-wide" href="">
                  <img className="mr-3" src={IconNode} alt="" />
                  {lang.index.box2.link}
                </a>
              </div>
            </div>

            <div className="border border-gray-83 px-8 py-6">
              <div className="text-20">
                {lang.index.box3.title}
              </div>

              <div className="text-consolas text-gray-d1 leading-tight">
                {lang.index.box3.p.map((v, i) => (
                  <p className="mt-2" key={i}>{v}</p>
                ))}
              </div>
            </div>

            <div className="flex mb:flex-col flex-center gap-x-6 border border-gray-83 px-8 py-6">
              <div className="flex-1 mb:order-2">
                <div className="text-20">
                  {lang.index.box4.title}
                </div>

                <div className="text-consolas text-gray-d1 leading-tight">
                  {lang.index.box4.p.map((v, i) => (
                    <p className="mt-2" key={i}>{v}</p>
                  ))}
                </div>
              </div>
              <img className="flex-none mb:order-1 mb:mb-4" src={IconPrivacy} alt="" />
            </div>

            <div className="border border-gray-83 px-8 py-6">
              <div className="flex mb:flex-col flex-center gap-x-6">
                <div className="flex-1 mb:order-2">
                  <div className="text-20 mb:mb-4">
                    {lang.index.box5.title}
                  </div>

                  <div className="text-consolas text-gray-d1 leading-tight mt-2">
                    {lang.index.box5.p.map((v, i) => (
                      <p className="mt-2" key={i}>{v}</p>
                    ))}
                  </div>
                </div>
                <img className="flex-none mb:order-1 mb:mb-4" src={IconToken} alt="" />

              </div>
              <div className="flex justify-start mt-2">
                <a className="flex items-center text-link-soft hover:text-main text-18 font-light tracking-wide" href="">
                  <img className="mr-3" src={IconCoin} alt="" />
                  {lang.index.box5.link}
                </a>
              </div>
            </div>

            <div className="border border-gray-83 px-8 py-6">
              <div className="text-20">
                {lang.index.box6.title}
              </div>

              <div className="text-consolas text-gray-d1 leading-tight">
                {lang.index.box6.p.map((v, i) => (
                  <p className="mt-2" key={i}>{v}</p>
                ))}
              </div>

              <div className="flex justify-end mt-2">
                <a className="flex items-center text-link-soft hover:text-main text-18 font-light tracking-wide" href="">
                  <img className="mr-3" src={IconGithub} alt="" />
                  {lang.index.box6.link}
                </a>
              </div>
            </div>

          </div>

          <AppBox className="mt-14 mb:mt-10 border border-gray-70" />

          <div className="flex mb:flex-col flex-center gap-x-12 max-w-[820px] mx-auto mt-10">
            <div className="text-24 text-main flex-none uppercase mb:text-center">
              {lang.index.howWorks.title.split('\n').map((v, i) => (
                <p key={i}>{v}</p>
              ))}
            </div>
            <div className="flex-1 text-consolas text-gray-d1 leading-tight mb:mt-4">
              {lang.index.howWorks.p.map((v, i) => (
                <p className="mt-2" key={i}>{v}</p>
              ))}
            </div>
          </div>

          <div className="flex-col flex-center mt-14">
            <img src={ArchDiagram} alt="" />

            <span
              className="mb:hidden text-link-soft font-light text-14 mt-1 cursor-pointer"
              onClick={handleOpenDialog}
            >
              {lang.index.howWorks.viewLarger}
            </span>
          </div>

          <div className="flex mb:flex-col gap-x-20 text-consolas leading-tight mt-10">
            {lang.index.terms.map((sec, seci) => (
              <div className="flex-1" key={seci}>
                {sec.map((v, i) => (
                  <p className="mt-5" key={i}>
                    <span className="font-bold uppercase text-white">
                      {v.name}
                    </span>
                    {v.text}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog
        open={state.open}
        onClose={handleCloseDialog}
        maxWidth="lg"
        disableScrollLock
      >
        <div className="flex flex-center w-full h-full bg-gray-0c relative">
          <div
            className="text-gray-ec text-22 p-4 top-0 right-0 absolute cursor-pointer z-10"
            onClick={handleCloseDialog}
          >
            <Close />
          </div>

          <img className="w-[100vw] max-w-[900px]" src={ArchDiagram} alt="" />
        </div>
      </Dialog>
    </div>
  );
});
