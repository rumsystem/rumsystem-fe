import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { Button } from '@mui/material';

import IconRumLight from '~/icons/icon_rum_light.svg';
import IconAndroid from '~/icons/icon_os_android.svg?fill-icon';
import { appService, langName, langService } from '~/service';
import TestflightImage from './testflight.png';
import { lang } from './lang';
import { useEffect } from 'react';

const RumLightDownloadPage = observer(() => {
  lang.useLang();

  useEffect(() => {
    appService.loadData();
  }, []);

  const androidLink = appService.state.metadata.androidLight?.file ?? '';
  if (!lang.ready) { return null; }
  return (
    <div className="flex-col flex-center gap-5 min-h-[100vh] pt-10 pb-24">
      <div className="fixed top-4 right-4 text-link2">
        <button
          className={classNames(langService.state.lang === 'en' && 'font-bold')}
          onClick={() => langService.switchLang('en')}
        >
          {langName.en}
        </button>
        <span className="mx-2">
          |
        </span>
        <button
          className={classNames(langService.state.lang === 'zh-tw' && 'font-bold')}
          onClick={() => langService.switchLang('zh-tw')}
        >
          {langName['zh-tw']}
        </button>
      </div>
      <img src={IconRumLight} alt="" />
      <div className="text-24 mt-4">
        {lang.title}
      </div>
      <div>
        <div className="flex flex-center w-7 h-7 border-[3px] border-black rounded-full">
          1
        </div>
      </div>
      <div>
        <a
          className="text-link2 text-14"
          href="https://itunes.apple.com/us/app/testflight/id899247664?mt=8"
          target="_blank"
          rel="noopener"
        >
          {lang.tip1}
        </a>
      </div>
      <div className="px-8 text-center text-14">
        {lang.tip2}
      </div>
      <div className="my-4">
        <img className="w-[268px] shadow-4" src={TestflightImage} alt="" />
      </div>
      <div>
        <div className="flex flex-center w-7 h-7 border-[3px] border-black rounded-full">
          2
        </div>
      </div>
      <div>
        {lang.tip3}
      </div>
      <div>
        <a
          className="text-link2 text-14"
          href="https://testflight.apple.com/join/5iOltcjr"
          target="_blank"
          rel="noopener"
        >
          <Button
            className="rounded-full px-8 normal-case"
            color="link2"
            variant="outlined"
          >
            {lang.button}
          </Button>
        </a>
      </div>
      <a
        className="fixed flex bottom-0 left-0 z-50 w-full !no-underline"
        href={androidLink}
        target="_blank"
        rel="noopener"
      >
        <Button
          className="flex flex-center gap-5 bottom-0 left-0 h-13 text-16 w-full rounded-none normal-case"
          color="black"
          variant="contained"
        >
          <IconAndroid className="text-24 text-white" />
          {lang.android}
        </Button>
      </a>
    </div>
  );
});

export default RumLightDownloadPage;
