import { reaction } from 'mobx';
import { langService } from '~/service/lang';

const fontBase = '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, ';
const fontEmoji = ', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
const langFontMap = [
  [/^en.*$/i, `${fontBase}sans-serif${fontEmoji}`],
  [/^zh-cn$/i, `${fontBase}Source Han Sans SC, Microsoft Yahei UI, Microsoft Yahei, sans-serif${fontEmoji}`],
  [/^zh-tw$/i, `${fontBase}dengxian, Source Han Sans TC, sans-serif${fontEmoji}`],
] as const;

const themeMap = {
  'zh-tw': {
    lineHeight: 1.5,
  },
  'zh-cn': {
    lineHeight: 1.5,
  },
  'en': {
    lineHeight: 1.4,
  },
} as const;

let style = null as null | HTMLStyleElement;

const appendTag = () => {
  const point = Array.from(document.head.childNodes)
    .filter((v) => v.nodeType === 8)
    .find((v) => v.textContent!.includes('style-loader-insertion-point'))!;

  if (!style) {
    style = document.createElement('style');
    document.head.append(style);
  }
  document.head.insertBefore(style, point);
};

const setTheme = () => {
  const lang = langService.state.lang;
  const item = langFontMap.find((v) => v[0].test(lang));
  const rules = [];
  rules.push(`html{--rum-line-height:${themeMap[lang].lineHeight};}`);
  if (item) {
    rules.push(`html{font-family:${item[1]};}`);
  } else {
    rules.push(`html{font-family:${langFontMap[0][1]};}`);
  }
  appendTag();
  style!.innerHTML = rules.join('\n');
};

const init = () => {
  const dispose = reaction(
    () => langService.state.lang,
    setTheme,
  );
  setTheme();

  return dispose;
};

export const themeService = {
  init,
};
