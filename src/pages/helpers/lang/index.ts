import { langService } from '~/service/lang';
import type { Content } from './en';

export const lang = langService.createLangLoader({
  cn: () => import('./cn') as any as Promise<{ content: Content }>,
  en: () => import('./en'),
});
