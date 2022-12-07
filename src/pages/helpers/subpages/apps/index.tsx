import { Fragment, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { action } from 'mobx';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { toDataURL } from 'qrcode';
import { ChevronLeft, ChevronRight, Close } from '@mui/icons-material';
import { Button, Dialog, Tooltip } from '@mui/material';

import PlanetIcon from 'boxicons/svg/solid/bxs-planet.svg?fill-icon';

import IconRumLight from '~/icons/icon_rum_light.svg';
import RumLogo from '~/icons/logo.png';
import RumLogo2x from '~/icons/logo@2x.png';
import RumLogo3x from '~/icons/logo@3x.png';
import PortLogoText from '~/icons/logo_port_text.svg';
import PortLogoImage from '~/icons/logo_port_img.svg';
import LibLogo from '~/icons/logo_lib.svg';
import FeedLogo from '~/icons/logo_feed.svg';
import QuorumLogo from '~/icons/logo_quorum.svg?fill-icon';
import IconAndroid from '~/icons/icon_os_android.svg?fill-icon';
import IconTestflight from '~/icons/icon_testflight.svg?fill-icon';
import IconLinux from '~/icons/icon_os_linux.svg';
import IconMac from '~/icons/icon_os_mac.svg';
import IconWin from '~/icons/icon_os_win.svg';
import IconGithub from '~/icons/icon_github.svg';
import IconBook from '~/icons/icon_book.svg';

import { Scrollable } from '~/components';
import { appService, langService, titleService } from '~/service';
import { useWiderThan } from '~/utils';

import { lang } from '../../lang';
import { mobileScreenShots, portScreenShots, rumlibScreenShots, feedScreenShots } from './screenshots';
import { ImageSlide } from './ImageSlide';
import { SectionItem } from './SectionItem';
import { BigImageContainer } from './BigImageContainer';

import './index.sass';

export const HomepageApps = observer(() => {
  titleService.useSetTitle('Apps & Tools');
  const state = useLocalObservable(() => ({
    imageIndex: 0,
    timerId: 0,
    dialog: false,
    bigImage: null as null | HTMLImageElement,
    qrImage: '',

    showNavBoxSideButton: false,
    get links() {
      return appService.state.links;
    },
    get versions() {
      return appService.state.versions;
    },
  }));
  const isPC = useWiderThan(960);
  const section = useRef<Array<HTMLDivElement | null>>([]);
  const navScrollBox = useRef<HTMLDivElement>(null);

  const handleShowBigImage = action((img: HTMLImageElement) => {
    state.dialog = true;
    state.bigImage = img.cloneNode() as HTMLImageElement;
    state.bigImage.className = 'w-[100vw] max-w-[900px]';
  });

  const handleCloseBigImage = action(() => {
    state.dialog = false;
  });

  const handleScrollTo = (i: number) => {
    const element = section.current[i];
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  useEffect(() => {
    appService.loadData();
    toDataURL(
      'https://rumsystem.net/rum-light-download',
      {
        margin: 0,
        scale: 8,
      },
      action((error, url) => {
        if (!error) {
          state.qrImage = url;
        }
      }),
    );
    const calcNavBoxButton = action(() => {
      const box = navScrollBox.current;
      if (!box) {
        return;
      }
      state.showNavBoxSideButton = box.scrollWidth > box.clientWidth;
    });
    calcNavBoxButton();
    window.addEventListener('resize', calcNavBoxButton);
    return () => {
      window.removeEventListener('resize', calcNavBoxButton);
    };
  }, []);

  return (
    <div className="main-box flex-col justify-center items-stretch">
      <div className="nav-box relative mb:hidden flex w-full bg-black/70">
        {state.showNavBoxSideButton && (<>
          <Button
            className="absolute left-0 top-0 bottom-0 z-10 rounded-none min-w-0 px-1"
            variant="text"
            onClick={() => {
              const box = navScrollBox.current;
              if (!box) { return; }
              box.scrollTo({ left: 0, behavior: 'smooth' });
            }}
          >
            <ChevronLeft className="text-40 text-white/70" />
          </Button>
          <Button
            className="absolute right-0 top-0 bottom-0 z-10 rounded-none min-w-0 px-1"
            variant="text"
            onClick={() => {
              const box = navScrollBox.current;
              if (!box) { return; }
              box.scrollTo({ left: box.scrollWidth, behavior: 'smooth' });
            }}
          >
            <ChevronRight className="text-40 text-white/70" />
          </Button>
        </>)}
        <Scrollable
          className="w-full"
          direction="horizontal"
          scrollBoxRef={navScrollBox}
          size="large"
          wrapperClassName="mx-auto"
          light
        >
          <div className="flex flex-none mx-auto justify-center gap-x-6 py-6 px-6">
            {[
              (<>
                <img className="h-16" src={IconRumLight} alt="" />
                <div className="text-24 font-kanit text-main font-light">
                  Rum Light
                </div>
                <div className="text-14 font-consolas text-gray-d1 text-center tracking-tight">
                  {lang.apps.rumlight.subtitle.map((v, i) => (<p key={i}>{v}</p>))}
                </div>
              </>),
              (<>
                <img className="flex-none h-16" src={RumLogo} srcSet={`${RumLogo2x} 2x, ${RumLogo3x} 3x,`} alt="" />
                <div className="text-24 font-kanit text-main font-light">
                  Rum App
                </div>
                <div className="text-14 font-consolas text-gray-d1 text-center tracking-tight">
                  {lang.apps.rumapp.subtitle.map((v, i) => (<p key={i}>{v}</p>))}
                </div>
              </>),
              (<>
                <img className="flex-none h-16" src={PortLogoImage} alt="" />
                <div className="text-24 font-kanit text-main font-light">
                  <img className="flex-none w-13 my-[10px]" src={PortLogoText} alt="" />
                </div>
                <div className="text-14 font-consolas text-gray-d1 text-center tracking-tight">
                  {lang.apps.port.subtitle.map((v, i) => (<p key={i}>{v}</p>))}
                </div>
              </>),
              (<>
                <img className="flex-none h-16" src={LibLogo} alt="" />
                <div className="text-24 font-kanit text-main font-light">
                  Rum Lib
                </div>
                <div className="text-14 font-consolas text-gray-d1 text-center tracking-tight">
                  {lang.apps.rumlib.subtitle.map((v, i) => (<p key={i}>{v}</p>))}
                </div>
              </>),
              (<>
                <img className="flex-none h-16 align-middle" src={FeedLogo} alt="" />
                <div className="text-24 font-kanit text-main font-light">
                  Feed
                </div>
                <div className="text-14 font-consolas text-gray-d1 text-center tracking-tight">
                  {lang.apps.feed.subtitle.map((v, i) => (<p key={i}>{v}</p>))}
                </div>
              </>),
              (<>
                <QuorumLogo className="text-[64px] text-white" />
                <div className="text-24 font-kanit text-main font-light">
                  Quorum
                </div>
                <div className="text-14 font-consolas text-gray-d1 text-center tracking-tight align-middle">
                  {lang.apps.quorum.subtitle.map((v, i) => (<p key={i}>{v}</p>))}
                  <br />
                </div>
              </>),
            ].map((v, i) => (
              <Button
                className={classNames(
                  'flex-col flex-none items-center justify-start gap-y-3 border border-solid border-gray-70',
                  'py-5 px-4 rounded-none normal-case min-w-[240px]',
                )}
                variant="text"
                onClick={() => handleScrollTo(i)}
                key={i}
              >
                {v}
              </Button>
            ))}
          </div>
        </Scrollable>

      </div>

      <SectionItem ref={(ref) => { section.current[0] = ref; }}>
        <span key="title">{lang.apps.rumapp.title}</span>
        <img
          className="flex-none h-16"
          src={RumLogo}
          srcSet={`${RumLogo2x} 2x, ${RumLogo3x} 3x,`}
          alt=""
          key="logo"
        />
        <span key="type">{lang.apps.rumapp.type}</span>
        <Fragment key="subtitle">
          {lang.apps.rumapp.subtitle.map((v, i) => (
            <p key={i}>{v}</p>
          ))}
        </Fragment>
        <Fragment key="icons">
          {[
            {
              icon: <img className="h-10" src={IconWin} alt="" />,
              text: 'Windows',
              link: state.links.windows,
            },
            {
              icon: <img className="h-10" src={IconLinux} alt="" />,
              text: 'Linux',
              link: state.links.linux,
            },
            {
              icon: <img className="h-10" src={IconMac} alt="" />,
              text: 'macOS',
              link: state.links.macos,
            },
            // {
            //   icon: <IconAndroid className="text-40 text-link-soft" />,
            //   text: 'Android',
            //   link: state.links.android,
            // },
            {
              icon: <PlanetIcon className="text-44 -m-[2px] text-link-soft" />,
              text: 'Web',
              link: 'http://wasmapp.rumsystem.net/',
            },
          ].map((v, i) => (
            <div className="flex flex-center font-kanit" key={i}>
              <a
                className="flex-col flex-center hover:hover-orange px-4 !no-underline"
                href={v.link}
                target="_blank"
              >
                {v.icon}
                <div className="mt-2 font-light text-20 text-link-soft">
                  {v.text}
                </div>
              </a>
            </div>
          ))}
        </Fragment>
        <Fragment key="desc">
          <div
            className={classNames(
              'flex-col mt-2 text-gray-d1 gap-y-4 mb:mt-0',
              langService.en && 'font-consolas text-15',
            )}
          >
            {lang.apps.rumlight.content.map((v, i) => (
              <p key={i}>{v}</p>
            ))}
          </div>
          <div
            className={classNames(
              'mt-6 text-13 text-gray-7b',
              langService.en && 'font-consolas',
            )}
          >
            {lang.apps.rumapp.smallTip}
          </div>
        </Fragment>
        <ImageSlide
          key="image"
          images={[
            'https://img-cdn.xue.cn/311-app_screen_1_opt.png',
            'https://img-cdn.xue.cn/420-image_2022-04-19_19-20-24_opt.png',
            'https://img-cdn.xue.cn/420-image_2022-04-19_19-20-52_opt.png',
            'https://img-cdn.xue.cn/311-app_screen_3_opt.png',
            'https://img-cdn.xue.cn/311-app_screen_4_opt.png',
            'https://img-cdn.xue.cn/311-app_screen_5_opt.png',
          ]}
          onImageClick={handleShowBigImage}
        />
      </SectionItem>

      <SectionItem ref={(ref) => { section.current[1] = ref; }}>
        <span key="title">{lang.apps.rumlight.title}</span>
        <img
          className="flex-none h-16"
          src={IconRumLight}
          alt=""
          key="logo"
        />
        <span key="type">{lang.apps.rumlight.type}</span>
        <Fragment key="subtitle">
          {lang.apps.rumlight.subtitle.map((v, i) => (
            <p key={i}>{v}</p>
          ))}
        </Fragment>
        <Fragment key="icons">
          <div className="flex flex-center font-kanit">
            <Tooltip
              classes={{
                tooltip: 'bg-white text-gray-70 shadow-4',
              }}
              title={(
                <div className="flex-col flex-center py-4 px-3">
                  <div>
                    <img
                      className="w-40 h-40"
                      src={state.qrImage}
                      alt=""
                    />
                  </div>
                  <div className="text-24 text-center leading-relaxed font-normal mt-4">
                    {lang.qrtip.map((v, i) => (
                      <p key={i}>{v}</p>
                    ))}
                  </div>
                </div>
              )}
            >
              <a
                className="flex-col flex-center hover:hover-orange px-4 !no-underline"
                href={isPC ? undefined : '/rum-light-download'}
                target="_blank"
              >
                <IconTestflight className="text-40 text-link-soft" />
                <div className="mt-2 font-light text-20 text-link-soft">
                  IOS Testflight
                </div>
              </a>
            </Tooltip>
          </div>
          <div className="flex flex-center font-kanit">
            <a
              className="flex-col flex-center hover:hover-orange px-4 !no-underline"
              href={state.links.androidLight}
              target="_blank"
              download
            >
              <IconAndroid className="text-44 -m-[2px] text-link-soft" />
              <div className="mt-2 font-light text-20 text-link-soft">
                Android
              </div>
            </a>
          </div>
        </Fragment>
        <Fragment key="desc">
          <div
            className={classNames(
              'flex-col mt-2 text-gray-d1 gap-y-4 mb:mt-0',
              langService.en && 'font-consolas text-15',
            )}
          >
            {lang.apps.rumlight.content.map((v, i) => (
              <p key={i}>{v}</p>
            ))}
          </div>
        </Fragment>
        <Fragment key="image">
          {isPC && (
            <div className="flex flex-center mb:flex-col mb:mt-4 flex-none gap-x-4 relative overflow-hidden cursor-pointer pc:min-w-[600px]">
              {mobileScreenShots.map((v, i) => (
                <img
                  className=""
                  src={v.x1}
                  srcSet={`${v.x2} 2x, ${v.x3} 3x`}
                  alt=""
                  key={i}
                />
              ))}
            </div>
          )}
          {!isPC && (
            <ImageSlide
              key="image"
              images={mobileScreenShots.map((v) => v.x2)}
              onImageClick={handleShowBigImage}
            />
          )}
        </Fragment>
      </SectionItem>

      <SectionItem ref={(ref) => { section.current[2] = ref; }}>
        <img
          className="inline flex-none h-5"
          src={PortLogoText}
          alt=""
          key="title"
        />
        <img
          className="flex-none h-16"
          src={PortLogoImage}
          alt=""
          key="logo"
        />
        <span key="type">{lang.apps.port.type}</span>
        <Fragment key="subtitle">
          {lang.apps.port.subtitle.map((v, i) => (
            <p key={i}>{v}</p>
          ))}
        </Fragment>
        <Fragment key="icons">
          <div className="flex flex-center font-kanit">
            <a
              className="flex-col flex-center hover:hover-orange px-4 !no-underline"
              href="https://port.base.one"
              target="_blank"
            >
              <PlanetIcon className="text-44 -m-[2px] text-link-soft" />
              <div className="mt-2 font-light text-20 text-link-soft">
                Web
              </div>
            </a>
          </div>
        </Fragment>
        <Fragment key="desc">
          <div
            className={classNames(
              'flex-col mt-2 text-gray-d1 gap-y-4 mb:mt-0',
              langService.en && 'font-consolas text-15',
            )}
          >
            {lang.apps.port.content.map((v, i) => (
              <p key={i}>{v}</p>
            ))}
          </div>
        </Fragment>

        <ImageSlide
          key="image"
          images={portScreenShots}
          onImageClick={handleShowBigImage}
        />
      </SectionItem>

      <SectionItem ref={(ref) => { section.current[3] = ref; }}>
        <span key="title">{lang.apps.rumlib.title}</span>
        <img
          className="flex-none h-16"
          src={LibLogo}
          alt=""
          key="logo"
        />
        <span key="type">{lang.apps.rumlib.type}</span>
        <Fragment key="subtitle">
          {lang.apps.rumlib.subtitle.map((v, i) => (
            <p key={i}>{v}</p>
          ))}
        </Fragment>
        <Fragment key="icons">
          {[
            {
              icon: <img className="h-10" src={IconWin} alt="" />,
              text: 'Windows',
              link: 'https://github.com/rumsystem/rum-epub/releases',
            },
            {
              icon: <img className="h-10" src={IconLinux} alt="" />,
              text: 'Linux',
              link: 'https://github.com/rumsystem/rum-epub/releases',
            },
            {
              icon: <img className="h-10" src={IconMac} alt="" />,
              text: 'macOS',
              link: 'https://github.com/rumsystem/rum-epub/releases',
            },
          ].map((v, i) => (
            <div className="flex flex-center font-kanit" key={i}>
              <a
                className="flex-col flex-center hover:hover-orange px-4 !no-underline"
                href={v.link}
                target="_blank"
                download
              >
                {v.icon}
                <div className="mt-2 font-light text-20 text-link-soft">
                  {v.text}
                </div>
              </a>
            </div>
          ))}
        </Fragment>
        <Fragment key="desc">
          <div
            className={classNames(
              'flex-col mt-2 text-gray-d1 gap-y-4 mb:mt-0',
              langService.en && 'font-consolas text-15',
            )}
          >
            {lang.apps.rumlib.content.map((v, i) => (
              <p key={i}>{v}</p>
            ))}
          </div>
        </Fragment>

        <ImageSlide
          key="image"
          images={rumlibScreenShots}
          onImageClick={handleShowBigImage}
        />
      </SectionItem>

      <SectionItem ref={(ref) => { section.current[4] = ref; }}>
        <span key="title">{lang.apps.feed.title}</span>
        <img
          className="flex-none h-16"
          src={FeedLogo}
          alt=""
          key="logo"
        />
        <span key="type">{lang.apps.feed.type}</span>
        <Fragment key="subtitle">
          {lang.apps.feed.subtitle.map((v, i) => (
            <p key={i}>{v}</p>
          ))}
        </Fragment>
        <Fragment key="icons">
          <div className="flex flex-center font-kanit">
            <a
              className="flex-col flex-center hover:hover-orange px-4 !no-underline"
              href="https://feed.base.one"
              target="_blank"
            >
              <PlanetIcon className="text-44 -m-[2px] text-link-soft" />
              <div className="mt-2 font-light text-20 text-link-soft">
                Web
              </div>
            </a>
          </div>
        </Fragment>
        <Fragment key="desc">
          <div
            className={classNames(
              'flex-col mt-2 text-gray-d1 gap-y-4 mb:mt-0',
              langService.en && 'font-consolas text-15',
            )}
          >
            {lang.apps.feed.content.map((v, i) => (
              <p key={i}>{v}</p>
            ))}
          </div>
        </Fragment>

        <ImageSlide
          key="image"
          images={feedScreenShots}
          onImageClick={handleShowBigImage}
        />
      </SectionItem>

      <div
        className={classNames(
          'flex bg-black/70 justify-between max-w-[1260px] w-full mt-14 mx-auto px-18 py-16 mb-12',
          'mb:flex-col mb:p-8 mb:gap-y-8',
        )}
        ref={(ref) => { section.current[5] = ref; }}
      >
        <div className="flex gap-4">
          <QuorumLogo className="text-white text-[80px]" />
          <div className="text-white">
            <div className="text-24">
              {lang.apps.quorum.title}
            </div>
            <div className="text-18 text-gray-d1 mt-2">
              {lang.apps.quorum.subtitle.map((v, i) => (
                <p key={i}>{v}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-col items-start gap-y-5">
          <a
            className="flex flex-center text-link-soft text-18"
            href="https://github.com/rumsystem/quorum"
            target="_blank"
            rel="noopener"
          >
            <img className="mr-3 w-6" src={IconGithub} alt="" />
            Rumsystem/quorum/
          </a>
          <a
            className="flex flex-center text-link-soft text-18"
            href="https://github.com/rumsystem/quorum#run-a-rum-peer-on-server"
            target="_blank"
            rel="noopener"
          >
            <img className="mr-3 w-6" src={IconBook} alt="" />
            {lang.apps.quorum.howtorun}
          </a>

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

          <BigImageContainer img={state.bigImage} />
        </div>
      </Dialog>
    </div>
  );
});
