import { Close } from '@mui/icons-material';
import { Dialog } from '@mui/material';
import classNames from 'classnames';
import { action } from 'mobx';
import { observer, useLocalObservable } from 'mobx-react-lite';
import React from 'react';
import { ImgBox } from '~/components/ImgBox';
import { langService, titleService } from '~/service';
import { useLessThan } from '~/utils';

import { AppBox } from '../../AppBox';
import { lang } from '../../lang';

import inject from './index.local.sass';

const IMAGES = [
  'https://img-cdn.xue.cn/311-app_screen_1_opt.png',
  'https://img-cdn.xue.cn/420-image_2022-04-19_19-20-24_opt.png',
  'https://img-cdn.xue.cn/420-image_2022-04-19_19-20-52_opt.png',
  'https://img-cdn.xue.cn/311-app_screen_3_opt.png',
  'https://img-cdn.xue.cn/311-app_screen_4_opt.png',
  'https://img-cdn.xue.cn/311-app_screen_5_opt.png',
];

export const HomepageApps = observer(() => {
  inject();
  titleService.useSetTitle('Apps & Tools');
  const state = useLocalObservable(() => ({
    imageIndex: 0,
    timerId: 0,
    dialog: false,
    bigImageLink: '',
  }));

  const isMobile = useLessThan(960);

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

  return (
    <div className="main-box flex-col justify-center items-stretch">
      <div className="flex flex-none justify-center bg-black bg-opacity-70 px-5 mb:px-0">
        <div
          className={classNames(
            'max-w-[1200px] grow text-14',
            langService.en && 'font-consolas',
          )}
        >
          <AppBox />
        </div>
      </div>

      <div
        className={classNames(
          'flex mb:flex-col justify-center max-w-[1260px] w-full mt-10 mb-14 mx-auto',
          'bg-black bg-opacity-70 leading-lang overflow-hidden',
          langService.en && 'font-consolas',
        )}
      >
        <div className="flex mb:flex-col mb:flex-none py-8 mb:pt-8 mb:pb-4 pl-12 mb:px-8 pc:min-w-[440px]">
          <div className="">
            <div className="font-kanit text-main text-20">
              {lang.apps.title}
            </div>

            <div
              className={classNames(
                'mt-2 text-gray-d1',
                langService.en && 'font-consolas text-15',
              )}
            >
              {lang.apps.content.map((v, i) => (
                <p className="mt-4" key={i}>{v}</p>
              ))}
            </div>
            <div
              className={classNames(
                'mt-6 text-13 text-gray-7b',
                langService.en && 'font-consolas',
              )}
            >
              {lang.apps.smallTip}
            </div>
          </div>
          <div
            className="flex-col mb:flex-row flex-center mb:mt-4 px-4"
            onMouseEnter={handleStopSlide}
            onMouseLeave={handleResumeSlide}
          >
            {Array(IMAGES.length).fill(0).map((_, i) => (
              <div
                className="h-6 w-6 flex flex-center cursor-pointer pc:my-2 mb:mx-2"
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
          className="flex flex-center flex-none relative overflow-hidden cursor-pointer pc:min-w-[600px]"
          onMouseEnter={handleStopSlide}
          onMouseLeave={handleResumeSlide}
        >
          <div className="relative overflow-hidden">
            <ImgBox
              className="flex-none pc:h-[580px] pc:w-auto mb:w-full mb:h-auto pointer-events-none"
              src={IMAGES[0]}
              alt=""
              width="772"
              height="580"
            />

            {IMAGES.map((v, i) => (
              <img
                className="absolute pc:h-[580px] pc:w-auto mb:w-full mb:h-auto duration-300 top-0"
                style={{
                  transform: isMobile
                    ? `translateX(${(i - state.imageIndex) * 100}%)`
                    : `translateY(${(i - state.imageIndex) * 100}%)`,
                }}
                src={v}
                alt=""
                key={i}
                onClick={() => handleShowBigImage(v)}
              />
            ))}
          </div>
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
