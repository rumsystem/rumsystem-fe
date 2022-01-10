import { Close } from '@mui/icons-material';
import { Dialog } from '@mui/material';
import classNames from 'classnames';
import { action } from 'mobx';
import { observer, useLocalObservable } from 'mobx-react-lite';
import React from 'react';

import { AppBox } from '../../AppBox';
import { lang } from '../../lang';

import './index.local.sass';

const IMAGES = [
  'https://img-cdn.xue.cn/17-app_screen_1_opt.png',
  'https://img-cdn.xue.cn/17-app_screen_2_opt.png',
  'https://img-cdn.xue.cn/17-app_screen_3_opt.png',
  'https://img-cdn.xue.cn/17-app_screen_4_opt.png',
  'https://img-cdn.xue.cn/17-app_screen_5_opt.png',
];

export const HomepageApps = observer(() => {
  lang.useLang();
  const state = useLocalObservable(() => ({
    imageIndex: 0,
    images: IMAGES.map((v, i) => ({ link: v, index: i })),
    timerId: 0,
    dialog: false,
    bigImageLink: '',
  }));

  const handleChangeImage = action((index: number) => {
    state.imageIndex = index;
  });

  const nextSlide = action(() => {
    const newIndex = state.imageIndex === IMAGES.length - 1
      ? 0
      : state.imageIndex + 1;
    state.imageIndex = newIndex;

    state.timerId = window.setTimeout(() => {
      nextSlide();
    }, 2500);
  });

  const handleStopSlide = () => {
    window.clearTimeout(state.timerId);
  };

  const handleResumeSlide = () => {
    handleStopSlide();
    state.timerId = window.setTimeout(() => {
      nextSlide();
    }, 2500);
  };

  const handleShowBigImage = action((link: string) => {
    state.dialog = true;
    state.bigImageLink = link;
  });

  const handleCloseBigImage = action(() => {
    state.dialog = false;
  });

  React.useEffect(() => {
    handleResumeSlide();

    return handleStopSlide;
  }, []);

  if (!lang.ready) {
    return null;
  }

  return (
    <div className="main-box flex-col justify-center items-stretch">
      <div className="flex flex-1 justify-center bg-black bg-opacity-70 px-5">
        <div className="max-w-[1200px] flex-1 text-14 text-consolas">
          <AppBox />
        </div>
      </div>

      <div className="flex justify-center bg-black bg-opacity-70 max-w-[1060px] mt-10 mx-auto text-consolas mb-14">
        <div className="flex py-12 pl-12">
          <div>
            <div className="text-kanit text-main text-20">
              What is Rum App?
            </div>

            <div className="mt-2 text-gray-d1 text-consolas leading-tight">
              <p className="mt-2">Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p className="mt-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <p className="mt-2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div
            className="flex-col flex-center gap-y-4 px-5"
            onMouseEnter={handleStopSlide}
            onMouseLeave={handleResumeSlide}
          >
            {Array(5).fill(0).map((_, i) => (
              <div
                className="h-6 w-6 flex flex-center cursor-pointer"
                key={i}
                onClick={() => handleChangeImage(i)}
              >
                <div
                  className={classNames(
                    'rounded-full',
                    state.imageIndex === i && 'h-[7px] w-[7px] bg-transparent dot-active',
                    state.imageIndex !== i && 'h-2 w-2 bg-link-soft',
                  )}
                  key={i}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex flex-center flex-none relative overflow-hidden cursor-pointer"
          onMouseEnter={handleStopSlide}
          onMouseLeave={handleResumeSlide}
        >
          <img
            className="flex-none h-[550px] w-auto opacity-0 pointer-events-none"
            src={IMAGES[0]}
            alt=""
          />

          {state.images.map((v) => (
            <img
              className="absolute h-[550px] w-auto duration-300"
              style={{
                transform: `translateY(${(v.index - state.imageIndex) * 100}%)`,
              }}
              src={v.link}
              alt=""
              key={v.index}
              onClick={() => handleShowBigImage(v.link)}
            />
          ))}
        </div>
      </div>

      <Dialog
        open={state.dialog}
        onClose={handleCloseBigImage}
        maxWidth="lg"
        disableScrollLock
      >
        <div className="flex flex-center w-full h-full bg-gray-0c relative">
          <div
            className="text-gray-ec text-22 p-4 top-0 right-0 absolute cursor-pointer z-10"
            onClick={handleCloseBigImage}
          >
            <Close />
          </div>

          <img className="w-[100vw] max-w-[900px]" src={state.bigImageLink} alt="" />
        </div>
      </Dialog>
    </div>
  );
});
