import React, { useRef } from 'react';
import { action } from 'mobx';
import { observer, useLocalObservable } from 'mobx-react-lite';
import classNames from 'classnames';
import { toDataURL } from 'qrcode';
import { Button, Popover, Tooltip } from '@mui/material';

import DownloadIcon from 'boxicons/svg/regular/bx-download.svg?fill-icon';
import LinkExternalIcon from 'boxicons/svg/regular/bx-link-external.svg?fill-icon';
import DownArrowIcon from 'boxicons/svg/solid/bxs-down-arrow.svg?fill-icon';

import RumLogo from '~/icons/logo.png';
import RumLogo2x from '~/icons/logo@2x.png';
import RumLogo3x from '~/icons/logo@3x.png';
import PortLogoText from '~/icons/logo_port_text.svg';
import PortLogoImage from '~/icons/logo_port_img.svg';
import LibLogo from '~/icons/logo_lib.svg';
import IconAndroid from '~/icons/icon_os_android.svg?fill-icon';
import IconTestflight from '~/icons/icon_testflight.svg';
import IconLinux from '~/icons/icon_os_linux.svg';
import IconMac from '~/icons/icon_os_mac.svg';
import IconWin from '~/icons/icon_os_win.svg';
import IconRumLight from '~/icons/icon_rum_light.svg';

import { RUM_APP_BASE, useWiderThan } from '~/utils';
import { langService, appService } from '~/service';

import { lang } from '../lang';

import './index.sass';

interface Props {
  className?: string
}

export const AppBox = observer((props: Props) => {
  const state = useLocalObservable(() => ({
    qrImage: '',
    showRumAppDownload: false,
    get links() {
      const macosFile = appService.state.metadata.macos?.files.find((v) => v.url.endsWith('.dmg'));
      return {
        windows: appService.state.metadata.windows?.path
          ? `${RUM_APP_BASE}${appService.state.metadata.windows?.path}`
          : '',
        linux: appService.state.metadata.linux?.path
          ? `${RUM_APP_BASE}${appService.state.metadata.linux?.path}`
          : '',
        macos: macosFile
          ? `${RUM_APP_BASE}${macosFile.url}`
          : '',
        android: appService.state.metadata.androidLight?.file ?? '',
      };
    },
    get versions() {
      return {
        windows: appService.state.metadata.windows?.version ?? '',
        linux: appService.state.metadata.linux?.version ?? '',
        macos: appService.state.metadata.macos?.version ?? '',
        android: appService.state.metadata.androidLight?.version_name ?? '',
        rumlib: appService.state.metadata.rumlib?.tag_name?.slice(1) ?? '',
      };
    },
  }));
  const isPC = useWiderThan(960);

  const rumAppDownloadButton = useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
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
  }, []);

  return (
    <div
      className={classNames(
        'app-box',
        props.className,
        langService.en && 'font-kanit',
      )}
    >
      <div className="flex flex-center mb:flex-col gap-x-12 gap-y-6 p-14 mb:p-8 border-b border-gray-70">
        <img
          className="flex-none w-20 h-auto pc:mr-12"
          src={IconRumLight}
        />
        <div className="flex-col items-center leading-relaxed">
          <div className="text-24 text-main text-center">
            {lang.appBox.light.title.map((v, i) => (
              <span
                className={classNames(
                  v.type.includes('medium') && 'font-medium',
                )}
                key={i}
              >
                {v.text}
              </span>
            ))}
          </div>
          <div className="text-20 text-center mt-3 text-kanit mb:text-14">
            {lang.appBox.light.desc.map((v, i) => (
              <p key={i}>{v}</p>
            ))}
          </div>
        </div>
        {isPC && (
          <div>
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
              <Button
                className="text-18 bg-main text-black rounded-full px-9 normal-case font-bold"
                color="rum"
                variant="contained"
              >
                {lang.appBox.light.download}
                <DownArrowIcon className="text-14 ml-2 -mr-2" />
              </Button>
            </Tooltip>
          </div>
        )}
        {!isPC && (
          <div className="flex justify-around w-full text-18 font-kanit font-light">
            <a
              className="text-link-soft"
              href="/rum-light-download"
              target="_blank"
              rel="noopener"
            >
              <button className="flex-col flex-center gap-y-3 p-2 text-link-soft">
                <img className="h-8" src={IconTestflight} />
                <div>IOS Testflight</div>
              </button>
            </a>
            <a
              className="text-link-soft"
              href={state.links.android}
              target="_blank"
              rel="noopener"
            >
              <button className="flex-col flex-center gap-y-3 p-2">
                <IconAndroid className="text-32" />
                <div>Android</div>
              </button>
            </a>
          </div>
        )}
      </div>

      {isPC && (
        <div className="grid grid-cols-3 items-center justify-items-center gap-x-4 gap-y-6 p-10">
          <div className="flex flex-center -mb-2">
            <img
              className="flex-none h-6"
              src={PortLogoText}
            />
          </div>
          <div className="flex flex-center text-main text-24 font-kanit -mb-2">
            Rum App
          </div>
          <div className="flex flex-center text-main text-24 font-kanit -mb-2">
            Rum Lib
          </div>

          <div
            className={classNames(
              'text-center text-14 leading-relaxed',
              langService.en && 'font-consolas',
            )}
          >
            {lang.appBox.port.map((v, i) => (
              <p key={i}>{v}</p>
            ))}
          </div>
          <div
            className={classNames(
              'text-center text-14 leading-relaxed',
              langService.en && 'font-consolas',
            )}
          >
            {lang.appBox.rumapp.map((v, i) => (
              <p key={i}>{v}</p>
            ))}
          </div>
          <div
            className={classNames(
              'text-center text-14 leading-relaxed',
              'font-consolas',
            )}
          >
            {lang.appBox.rumlib.map((v, i) => (
              <p key={i}>{v}</p>
            ))}
          </div>

          <img
            className="flex-none h-16"
            src={PortLogoImage}
          />
          <img
            className="flex-none h-16"
            src={RumLogo}
            srcSet={`${RumLogo2x} 2x, ${RumLogo3x} 3x,`}
            alt=""
          />
          <img
            className="flex-none h-16"
            src={LibLogo}
            alt=""
          />

          <a
            className="flex flex-center text-link-soft font-kanit font-light"
            href="https://port.base.one/"
            target="_blank"
            rel="noopener"
          >
            Web <LinkExternalIcon className="text-16 ml-1 -mb-px" />
          </a>
          <a
            className="flex flex-center text-main font-kanit font-light cursor-pointer"
            target="_blank"
            rel="noopener"
            ref={rumAppDownloadButton}
            onClick={action(() => { state.showRumAppDownload = true; })}
          >
            <DownloadIcon className="text-18 mr-1 font-kanit inline" />
            Windows 7+, v{state.versions.windows || '...'}
          </a>
          <a
            className="flex flex-center text-main font-kanit font-light"
            href="https://github.com/rumsystem/rum-epub/releases"
            target="_blank"
            rel="noopener"
          >
            <DownloadIcon className="text-18 mr-1 font-kanit inline" />
            Windows 7+, v{state.versions.rumlib || '...'}
          </a>
        </div>
      )}

      {!isPC && (
        <div className="flex-col items-stretch divide-y divide-gray-70">
          <div className="flex-col flex-center gap-y-6 px-4 py-8">
            <div className="flex flex-center -mb-2">
              <img
                className="flex-none h-6"
                src={PortLogoText}
              />
            </div>
            <div
              className={classNames(
                'text-center text-14 leading-relaxed',
                langService.en && 'font-consolas',
              )}
            >
              {lang.appBox.port.map((v, i) => (
                <p key={i}>{v}</p>
              ))}
            </div>
            <img
              className="flex-none h-16"
              src={PortLogoImage}
            />
            <a
              className="flex flex-center text-link-soft font-kanit font-light"
              href="https://port.base.one/"
              target="_blank"
              rel="noopener"
            >
              Web <LinkExternalIcon className="text-16 ml-1 -mb-px" />
            </a>
          </div>

          <div className="flex-col flex-center gap-y-6 px-4 py-8">
            <div className="flex flex-center text-main text-24 font-kanit -mb-2">
              Rum App
            </div>
            <div
              className={classNames(
                'text-center text-14 leading-relaxed',
                langService.en && 'font-consolas',
              )}
            >
              {lang.appBox.rumapp.map((v, i) => (
                <p key={i}>{v}</p>
              ))}
            </div>
            <img
              className="flex-none h-16"
              src={RumLogo}
              srcSet={`${RumLogo2x} 2x, ${RumLogo3x} 3x,`}
              alt=""
            />
            <a
              className="flex flex-center text-main font-kanit font-light cursor-pointer"
              target="_blank"
              rel="noopener"
              ref={rumAppDownloadButton}
              onClick={action(() => { state.showRumAppDownload = true; })}
            >
              <DownloadIcon className="text-18 mr-1 font-kanit inline" />
              Windows 7+, v{state.versions.windows || '...'}
            </a>
          </div>

          <div className="flex-col flex-center gap-y-6 px-4 py-8">
            <div className="flex flex-center text-main text-24 font-kanit -mb-2">
              Rum Lib
            </div>
            <div
              className={classNames(
                'text-center text-14 leading-relaxed',
                'font-consolas',
              )}
            >
              {lang.appBox.rumlib.map((v, i) => (
                <p key={i}>{v}</p>
              ))}
            </div>
            <img
              className="flex-none h-16"
              src={LibLogo}
              alt=""
            />
            <a
              className="flex flex-center text-main font-kanit font-light"
              href="https://github.com/rumsystem/rum-epub/releases"
              target="_blank"
              rel="noopener"
            >
              <DownloadIcon className="text-18 mr-1 font-kanit inline" />
              Windows 7+, v{state.versions.rumlib || '...'}
            </a>
          </div>
        </div>
      )}

      <Popover
        anchorEl={rumAppDownloadButton.current}
        anchorOrigin={{
          horizontal: isPC ? 'center' : 'left',
          vertical: 'bottom',
        }}
        transformOrigin={{
          horizontal: 'center',
          vertical: isPC ? 'top' : 'center',
        }}
        open={state.showRumAppDownload}
        onClose={action(() => { state.showRumAppDownload = false; })}
        disableScrollLock
      >
        <div className="grid grid-flow-col auto-cols-min gap-5 mb:grid-flow-row p-6">
          {[
            {
              icon: IconWin,
              text: 'Windows',
              version: state.versions.windows,
              link: state.links.windows,
            },
            {
              icon: IconLinux,
              text: 'Linux',
              version: state.versions.linux,
              link: state.links.linux,
            },
            {
              icon: IconMac,
              text: 'macOS',
              version: state.versions.macos,
              link: state.links.macos,
            },
          ].map((v, i) => (
            <div className="flex flex-center font-kanit" key={i}>
              <a
                className="flex-col flex-center hover:hover-orange px-4 !no-underline"
                href={v.link}
                target="_blank"
                download
              >
                <img className="h-10" src={v.icon} alt="" />
                <div className="mt-2 font-light text-20 text-link-soft">
                  {v.text}
                </div>
                <div className="mt-1 font-light text-14 text-gray-b0">
                  {!v.link ? '...' : `v${v.version}`}
                </div>
              </a>
            </div>
          ))}
        </div>
      </Popover>
    </div>
  );
});
