import React from 'react';
import classNames from 'classnames';
import { action } from 'mobx';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { Dialog } from '@mui/material';
import { Close } from '@mui/icons-material';

import { langService, titleService } from '~/service';
import { ImgBox } from '~/components/ImgBox';

import { lang } from '../../lang';
import ArchDiagram from './icons/arch_diagram.svg';

export const HomepageIndex = observer(() => {
  titleService.useSetTitle('Homepage');
  const state = useLocalObservable(() => ({
    open: false,
  }));

  const handleCloseDialog = action(() => {
    state.open = false;
  });

  return (
    <div className="main-box flex justify-center">
      <div className="flex grow justify-center mx-6 mb:mx-0 mb:mt-0 my-10 px-6 max-w-[1200px] bg-black bg-opacity-70">
        <div
          className={classNames(
            'max-w-[1000px] grow text-16 text-gray-d1 py-16 mb:pt-8 leading-lang',
            langService.en && 'font-kanit',
          )}
        >
          <div className="grid gap-x-[10px] gap-y-[10px] grid-cols-2 text-white mb:grid-cols-1">
            <div className="border border-gray-83 px-8 py-6">
              <div className="flex mb:flex-col flex-center">
                <div className="grow">
                  <div className="text-20">
                    {lang.index.box2.title}
                  </div>

                  <div
                    className={classNames(
                      'text-gray-d1 mt-2 text-14',
                      langService.en && 'font-consolas',
                    )}
                  >
                    {lang.index.box2.p.map((v, i) => (
                      <p className="mt-3 mb-1" key={i}>{v}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-83 px-8 py-6">
              <div className="text-20">
                {lang.index.box3.title}
              </div>

              <div
                className={classNames(
                  'text-gray-d1 text-14',
                  langService.en && 'font-consolas',
                )}
              >
                {lang.index.box3.p.map((v, i) => (
                  <p className="mt-3 mb-1" key={i}>{v}</p>
                ))}
              </div>
            </div>

            <div className="flex mb:flex-col flex-center border border-gray-83 px-8 py-6">
              <div className="grow mb:order-2">
                <div className="text-20">
                  {lang.index.box4.title}
                </div>

                <div
                  className={classNames(
                    'text-gray-d1 text-14',
                    langService.en && 'font-consolas',
                  )}
                >
                  {lang.index.box4.p.map((v, i) => (
                    <p className="mt-3 mb-1" key={i}>{v}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-gray-83 px-8 py-6">
              <div className="text-20">
                {lang.index.box6.title}
              </div>

              <div
                className={classNames(
                  'text-gray-d1 text-14',
                  langService.en && 'font-consolas',
                )}
              >
                {lang.index.box6.p.map((v, i) => (
                  <p className="mt-3 mb-1" key={i}>{v}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex mb:flex-col mb:flex-center max-w-[820px] mx-auto mt-10">
            <div className="text-24 text-main font-kanit flex-none uppercase leading-normal mb:text-center pc:mr-12 pc:mt-8">
              {lang.index.howWorks.title.split('\n').map((v, i) => (
                <p key={i}>{v}</p>
              ))}
            </div>
            <div
              className={classNames(
                'text-gray-d1 grow mb:mt-4',
                langService.en && 'font-consolas text-15',
              )}
            >
              {lang.index.howWorks.p.map((v, i) => (
                <p className="mt-4" key={i}>
                  {v.map((u, j) => (
                    <span
                      className={classNames(u.type.includes('bold') && 'font-bold')}
                      key={j}
                    >
                      {u.text}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </div>

          <div className="flex-col flex-center mt-14">
            <ImgBox src={ArchDiagram} alt="" width={640} height={540} />
          </div>

          <div
            className={classNames(
              'grid grid-cols-2 mb:grid-cols-1 gap-x-20 mt-10 text-14',
              langService.en && 'font-consolas',
            )}
          >
            {lang.index.terms.map((sec, seci) => (
              <div className="grow" key={seci}>
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
