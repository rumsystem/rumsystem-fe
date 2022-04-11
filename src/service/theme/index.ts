import { reaction } from 'mobx';
import { langService } from '~/service';

const fontBase = '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, ';
const fontEmoji = ', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
const langFontMap = [
  [/^en.*$/i, `${fontBase}sans-serif${fontEmoji}`],
  [/^zh-cn$/i, `${fontBase}Source Han Sans SC, Microsoft Yahei UI, Microsoft Yahei, sans-serif${fontEmoji}`],
  [/^zh-tw$/i, `${fontBase}dengxian, Source Han Sans TC, sans-serif${fontEmoji}`],
] as const;

export const themeLang = langService.createLangLoader({
  'zh-tw': {
    content: {
      lineHeight: 1.5,
    },
  },
  'zh-cn': {
    content: {
      lineHeight: 1.5,
    },
  },
  'en': {
    content: {
      lineHeight: 1.3,
    },
  },
});

const style = document.createElement('style');

const setTheme = () => {
  const lang = langService.state.lang;
  const item = langFontMap.find((v) => v[0].test(lang));
  const rules = [];
  rules.push(`html{--rum-line-height:${themeLang.lineHeight};}`);
  if (item) {
    rules.push(`html{font-family:${item[1]};}`);
  } else {
    rules.push(`html{font-family:${langFontMap[0][1]};}`);
  }
  style.innerHTML = rules.join('\n');
};

const init = () => {
  const dispose = reaction(
    () => langService.state.lang,
    setTheme,
  );
  setTheme();
  document.head.append(style);

  return dispose;
};

export const themeService = {
  init,
};
