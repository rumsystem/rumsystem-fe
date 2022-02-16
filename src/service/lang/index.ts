import { action, observable, reaction, runInAction } from 'mobx';
import React from 'react';

const LANG_STORAGE_KEY = 'LANG_STORAGE_KEY';

const allLang = ['cn', 'en'] as const;
export type AllLanguages = typeof allLang[number];
type LangData<T> = Record<string, (() => Promise<{ content: T }>) | { content: T }>;

const state = observable({
  lang: 'en' as AllLanguages,
});

const createLangLoader = <T extends unknown>(langData: LangData<T>) => {
  const disposes = [] as Array<() => unknown>;
  const loaderState = observable({
    lang: state.lang,
    pendingLang: '' as AllLanguages | '',
    map: new Map<string, Promise<{ content: T }> | { content: T }>(),
    deps: 0,
    get active() {
      return !!this.deps;
    },
    get ready() {
      const item = this.map.get(this.lang);
      return !(!item || item instanceof Promise);
    },
  });

  const loadLang = async () => {
    // fallback to cn
    const langToLoad = state.lang in langData
      ? state.lang
      : 'cn';

    const item = loaderState.map.get(state.lang);
    if (item) {
      // loading progressing
      if (item instanceof Promise) {
        return;
      }
      // loaded
      runInAction(() => {
        loaderState.lang = langToLoad;
        loaderState.pendingLang = '';
      });
      return;
    }

    runInAction(() => {
      loaderState.pendingLang = langToLoad;
    });

    // load the lang
    const loadFn = langData[langToLoad];
    const result = typeof loadFn === 'function' ? loadFn() : loadFn;
    if (!(result instanceof Promise)) {
      runInAction(() => {
        loaderState.map.set(langToLoad, result);
      });
    }

    const data = await result;

    runInAction(() => {
      loaderState.map.set(langToLoad, data);
      const item = loaderState.map.get(loaderState.pendingLang);
      if (!item || !loaderState.pendingLang || item instanceof Promise) {
        return;
      }
      loaderState.lang = loaderState.pendingLang;
      loaderState.pendingLang = '';
    });
  };

  const useLang = () => {
    React.useEffect(action(() => {
      loaderState.deps += 1;
    }), []);
    return action(() => {
      loaderState.deps -= 1;
    });
  };

  const proxy = new Proxy({}, {
    get(_target, prop, _receiver) {
      if (prop === 'ready') {
        return loaderState.ready;
      }

      if (prop === 'useLang') {
        return useLang;
      }

      const item = loaderState.map.get(loaderState.lang);
      if (!item || item instanceof Promise) {
        if (process.env.NODE_ENV === 'development') {
          if (prop === '$$typeof') {
            return;
          }
          console.error(new Error(`loading key ${String(prop)} for ${loaderState.lang} failed. ${loaderState.lang} is not loaded or defined`));
        }
        return null;
      }

      return item.content[prop as keyof T];
    },
  });

  disposes.push(reaction(
    () => [state.lang, loaderState.active],
    () => {
      if (loaderState.active) {
        loadLang();
      }
    },
  ));

  return proxy as T & { useLang: typeof useLang, ready: boolean };
};

const switchLang = action((lang: AllLanguages) => {
  state.lang = lang;
  saveLang();
});

const saveLang = () => {
  localStorage.setItem(LANG_STORAGE_KEY, state.lang);
};

const init = action(() => {
  const lang = localStorage.getItem(LANG_STORAGE_KEY) as AllLanguages;
  if (!lang) {
    if (navigator.language.startsWith('zh')) {
      state.lang = 'cn';
    }
  } else if (allLang.includes(lang)) {
    state.lang = lang;
  }
  saveLang();
  return () => 1;
});

export const langService = {
  state,
  init,
  createLangLoader,
  switchLang,
};
