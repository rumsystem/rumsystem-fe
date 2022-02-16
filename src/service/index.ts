import { langService } from './lang';

export const initService = () => {
  const disposes = [
    langService.init(),
  ];

  return () => {
    disposes.forEach((v) => v());
  };
};
