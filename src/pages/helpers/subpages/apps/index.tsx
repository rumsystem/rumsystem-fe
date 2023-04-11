import { useEffect } from 'react';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { AiOutlineLink } from 'react-icons/ai';
import { Tooltip } from '@mui/material';

import PortLogoImage from '~/icons/logo_port_img.svg';
import IconLinux from '~/icons/icon_os_linux.svg';
import IconMac from '~/icons/icon_os_mac.svg';
import IconWin from '~/icons/icon_os_win.svg';
import IconGithub from '~/icons/icon_github.svg';

import { appService, titleService } from '~/service';

import { lang } from '../../lang';

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

  useEffect(() => {
    appService.loadData();
  }, []);

  return (
    <div className="main-box w-full">
      <div className="min-h-screen flex items-start justify-center bg-black bg-opacity-70 px-5">
        <div className="w-[1000px] mx-auto pt-10 grid mb:grid-cols-1 grid-cols-3 gap-x-2 gap-y-12 justify-items-center pb-20">

          <div className="rounded-3xl border border-white/60 h-[194px] w-[280px] mb:w-[80vw] box-border p-6 text-white/90 bg-black bg-opacity-80">
            <div className="flex items-start leading-none tracking-wider">
              <img src="https://storage.googleapis.com/static.press.one/rum/rum-app-logo.png" className="w-10 h-10 rounded-full" />
              <div className="ml-4">
                <div className="text-[20px] font-bold">Rum App</div>
                <div className="mt-2 text-white/60 text-[12px]">{lang.apps.fullNodeApp}</div>
              </div>
            </div>
            <div className="mt-4 text-white/80 min-h-[55px]">
              {lang.apps.rumAppDesc}
            </div>
            <div className="mt-4 flex items-center">
              <Tooltip
                enterDelay={200}
                enterNextDelay={200}
                placement="bottom"
                title='Windows'
              >
                <a href={state.links.windows}>
                  <img className="h-[18px] mr-4" src={IconWin} alt="" />
                </a>
              </Tooltip>
              <Tooltip
                enterDelay={200}
                enterNextDelay={200}
                placement="bottom"
                title='Mac'
              >
                <a href={state.links.macos}>
                  <img className="h-5 mr-4" src={IconMac} alt="" />
                </a>
              </Tooltip>
              <Tooltip
                enterDelay={200}
                enterNextDelay={200}
                placement="bottom"
                title='Linux'
              >
                <a href={state.links.linux}>
                  <img className="h-5 mr-4" src={IconLinux} alt="" />
                </a>
              </Tooltip>
              <a href="https://github.com/rumsystem/rum-app" target='_blank'>
                <img className="h-5 mr-4" src={IconGithub} alt="" />
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/60 h-[194px] w-[280px] mb:w-[80vw] box-border p-6 text-white/90 bg-black bg-opacity-80">
            <div className="flex items-start leading-none tracking-wider">
              <img src="https://feed.base.one/logo192.png" className="w-10 h-10 rounded-full" />
              <div className="ml-4">
                <div className="text-[20px] font-bold">Feed</div>
                <div className="mt-2 text-white/60 text-[12px]">{lang.apps.lightNodeApp}</div>
              </div>
            </div>
            <div className="mt-4 text-white/80 min-h-[55px]">
              {lang.apps.feedDesc}
            </div>
            <div className="mt-4 flex items-center">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border border-sky-300 leading-none mr-4">
                <a href='http://feed.base.one' target='_blank' className="text-sky-300 text-12">
                  <AiOutlineLink className="text-14" />
                </a>
              </div>
              <a href="https://github.com/okdaodine/rum-feed" target='_blank'>
                <img className="h-5 mr-4" src={IconGithub} alt="" />
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/60 h-[194px] w-[280px] mb:w-[80vw] box-border p-6 text-white/90 bg-black bg-opacity-80">
            <div className="flex items-start leading-none tracking-wider">
              <img src="https://cnft.base.one/logo192.png" className="w-10 h-10 rounded-full" />
              <div className="ml-4">
                <div className="text-[20px] font-bold">CNFT Club</div>
                <div className="mt-2 text-white/60 text-[12px]">{lang.apps.lightNodeApp}</div>
              </div>
            </div>
            <div className="mt-4 text-white/80 min-h-[55px]">
              {lang.apps.cnftDesc}
            </div>
            <div className="mt-4 flex items-center">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border border-sky-300 leading-none mr-4">
                <a href='http://feed.base.one' target='_blank' className="text-sky-300 text-12">
                  <AiOutlineLink className="text-14" />
                </a>
              </div>
              <a href="https://github.com/okdaodine/rum-feed" target='_blank'>
                <img className="h-5 mr-4" src={IconGithub} alt="" />
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/60 h-[194px] w-[280px] mb:w-[80vw] box-border p-6 text-white/90 bg-black bg-opacity-80">
            <div className="flex items-start leading-none tracking-wider">
              <img src={PortLogoImage} className="w-10 h-10 rounded-full" />
              <div className="ml-4">
                <div className="text-[20px] font-bold">Port</div>
                <div className="mt-2 text-white/60 text-[12px]">{lang.apps.lightNodeApp}</div>
              </div>
            </div>
            <div className="mt-4 text-white/80 min-h-[55px]">
              {lang.apps.portDesc}
            </div>
            <div className="mt-4 flex items-center">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border border-sky-300 leading-none mr-4">
                <a href='http://port.base.one' target='_blank' className="text-sky-300 text-12">
                  <AiOutlineLink className="text-14" />
                </a>
              </div>
              <a href="https://github.com/noe132/nft-bbs" target='_blank'>
                <img className="h-5 mr-4" src={IconGithub} alt="" />
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/60 h-[194px] w-[280px] mb:w-[80vw] box-border p-6 text-white/90 bg-black bg-opacity-80">
            <div className="flex items-start leading-none tracking-wider">
              <img src="https://gui.node.rumsystem.net/dashboard.fullnode.png" className="w-10 h-10 rounded-full" />
              <div className="ml-4">
                <div className="text-[20px] font-bold">Fullnode GUI</div>
                <div className="mt-2 text-white/60 text-[12px]">{lang.apps.tool}</div>
              </div>
            </div>
            <div className="mt-4 text-white/80 min-h-[55px]">
              {lang.apps.guiDesc}
            </div>
            <div className="mt-4 flex items-center">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border border-sky-300 leading-none mr-4">
                <a href='https://gui.node.rumsystem.net/' target='_blank' className="text-sky-300 text-12">
                  <AiOutlineLink className="text-14" />
                </a>
              </div>
              <a href="https://github.com/okdaodine/rum-fullnode-gui" target='_blank'>
                <img className="h-5 mr-4" src={IconGithub} alt="" />
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/60 h-[194px] w-[280px] mb:w-[80vw] box-border p-6 text-white/90 bg-black bg-opacity-80">
            <div className="flex items-start leading-none tracking-wider">
              <img src="https://storage.googleapis.com/static.press.one/rum/rum-open-node.png" className="w-10 h-10 rounded-full" />
              <div className="ml-4">
                <div className="text-[20px] font-bold">Open Node</div>
                <div className="mt-2 text-white/60 text-[12px]">{lang.apps.tool}</div>
              </div>
            </div>
            <div className="mt-4 text-white/80 min-h-[55px]">
              {lang.apps.openNodeDesc}
            </div>
            <div className="mt-4 flex items-center">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border border-sky-300 leading-none mr-4">
                <a href='https://node.rumsystem.net/' target='_blank' className="text-sky-300 text-12">
                  <AiOutlineLink className="text-14" />
                </a>
              </div>
              <a href="https://github.com/okdaodine/rum-open-node" target='_blank'>
                <img className="h-5 mr-4" src={IconGithub} alt="" />
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/60 h-[194px] w-[280px] mb:w-[80vw] box-border p-6 text-white/90 bg-black bg-opacity-80">
            <div className="flex items-start leading-none tracking-wider">
              <img src="https://storage.googleapis.com/static.press.one/rum/library.png" className="w-10 h-10 rounded-full" />
              <div className="ml-4">
                <div className="text-[20px] font-bold">Library</div>
                <div className="mt-2 text-white/60 text-[12px]">{lang.apps.fullNodeApp}</div>
              </div>
            </div>
            <div className="mt-4 text-white/80 min-h-[55px]">
              {lang.apps.libraryDesc}
            </div>
            <div className="mt-4 flex items-center">
              <Tooltip
                enterDelay={200}
                enterNextDelay={200}
                placement="bottom"
                title='Windows'
              >
                <a href="https://github.com/rumsystem/rum-epub/releases" target='_blank'>
                  <img className="h-[18px] mr-4" src={IconWin} alt="" />
                </a>
              </Tooltip>
              <Tooltip
                enterDelay={200}
                enterNextDelay={200}
                placement="bottom"
                title='Mac'
              >
                <a href="https://github.com/rumsystem/rum-epub/releases" target='_blank'>
                  <img className="h-5 mr-4" src={IconMac} alt="" />
                </a>
              </Tooltip>
              <Tooltip
                enterDelay={200}
                enterNextDelay={200}
                placement="bottom"
                title='Linux'
              >
                <a href="https://github.com/rumsystem/rum-epub/releases" target='_blank'>
                  <img className="h-5 mr-4" src={IconLinux} alt="" />
                </a>
              </Tooltip>
              <a href="https://github.com/rumsystem/rum-epub" target='_blank'>
                <img className="h-5 mr-4" src={IconGithub} alt="" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
});
