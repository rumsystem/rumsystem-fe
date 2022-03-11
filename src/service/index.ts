import { langService } from './lang';
import { themeService } from './theme';

export const initService = () => {
  const disposes = [
    langService.init(),
    themeService.init(),
  ];

  return () => {
    disposes.forEach((v) => v());
  };
};
