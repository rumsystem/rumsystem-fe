import { langService } from '~/service/lang';

export const lang = langService.createLangLoader({
  'zh-tw': () => import('./zh-tw'),
  en: () => import('./en'),
});
