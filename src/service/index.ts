import { langService } from './lang';
import { themeService } from './theme';

export * from './app';
export * from './firstRender';
export * from './lang';
export * from './theme';
export * from './title';

export const initService = () => {
  const disposes = [
    themeService.init(),
    langService.init(),
  ];

  return () => {
    disposes.forEach((v) => v());
  };
};

export const initServiceSSR = () => {
  if (process.env.SSR) {
    themeService.initSSR();
  }
};
