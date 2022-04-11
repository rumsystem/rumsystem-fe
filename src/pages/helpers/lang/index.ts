import { langService } from '~/service';

export const lang = langService.createLangLoader({
  'zh-tw': () => import('./zh-tw'),
  en: () => import('./en'),
});
