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

const state = {
  css: '',
};

let style = null as null | HTMLStyleElement;

const appendTag = () => {
  if (typeof document === 'undefined') {
    return;
  }
  const point = Array.from(document.head.childNodes)
    .filter((v) => v.nodeType === 8)
    .find((v) => v.textContent!.includes('style-loader-insertion-point'))!;

  if (!style) {
    style = document.querySelector('style[data-theme-service="true"]') ?? document.createElement('style');
    style.dataset.themeService = 'true';
    document.head.append(style);
  }
  document.head.insertBefore(style, point);
};

const setTheme = () => {
  const lang = langService.state.lang;
  const item = langFontMap.find((v) => v[0].test(lang));
  const rules = [];
  rules.push(`html{--rum-line-height:${themeMap[lang].lineHeight};}`);
  rules.push(`.font-default{--rum-line-height:${themeMap[lang].lineHeight};}`);
  if (item) {
    rules.push(`html{font-family:${item[1]};}`);
    rules.push(`.font-default{font-family:${item[1]} !important;}`);
  } else {
    rules.push(`html{font-family:${langFontMap[0][1]};}`);
    rules.push(`.font-default{font-family:${langFontMap[0][1]} !important;}`);
  }
  appendTag();
  if (process.env.SSR) {
    state.css = rules.join('\n');
  } else {
    style!.innerHTML = rules.join('\n');
  }
};

const init = () => {
  const dispose = reaction(
    () => langService.state.lang,
    setTheme,
  );
  setTheme();

  return dispose;
};

const initSSR = () => {
  setTheme();
};

export const themeService = {
  init,
  initSSR,
  state,
};
