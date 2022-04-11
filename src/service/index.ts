import { langService } from './lang';
import { themeService } from './theme';

export * from './app';
export * from './lang';
export * from './theme';

export const initService = () => {
  const disposes = [
    themeService.init(),
    langService.init(),
  ];

  return () => {
    disposes.forEach((v) => v());
  };
};
