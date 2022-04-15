import { langService } from '~/service';

import * as zhtw from './zh-tw';
import * as en from './en';

export const lang = langService.createLangLoader({
  'zh-tw': zhtw,
  en,

  // 'zh-tw': () => import('./zh-tw'),
  // en: () => import('./en'),
});
