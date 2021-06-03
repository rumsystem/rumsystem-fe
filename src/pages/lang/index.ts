import { langService } from '@/service/lang';

export const lang = langService.createLangLoader({
  cn: () => import('./cn'),
  en: () => import('./en'),
});
