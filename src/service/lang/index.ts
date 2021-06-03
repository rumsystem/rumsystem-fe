import { action, observable, reaction, runInAction } from 'mobx';

const serviceState = observable({
  lang: 'en',
});

const createLangLoader = <T extends unknown>(langData: Record<string, () => Promise<{ content: T }>>) => {
  const disposes = [] as Array<() => unknown>;
  const state = observable({
    lang: serviceState.lang,
    pendingLang: '',
    map: {} as Record<string, Promise<{ content: T }> | T | undefined>,
    deps: 0,
    get active() {
      return !!this.deps;
    },
    loadLang() {
      // fallback to cn
      const langToLoad = serviceState.lang in langData
        ? serviceState.lang
        : 'cn';

      const item = state.map[serviceState.lang];
      // if already loaded
      if (!!item && !(item instanceof Promise)) {
        state.lang = langToLoad;
        state.pendingLang = '';
        return;
      }

      runInAction(() => {
        state.pendingLang = langToLoad;
      });

      // load the lang
      const loadPromise = langData[langToLoad]();
      runInAction(() => {
        state.map[langToLoad] = loadPromise;
      });
      loadPromise.then(action((content) => {
        state.map[langToLoad] = content.content;
        this.checkPending();
      }));
    },
    checkPending() {
      const item = state.map[state.pendingLang];
      // set page lang if has data for pending lang
      if (!!item && !(item instanceof Promise)) {
        state.lang = state.pendingLang;
        state.pendingLang = '';
      }
    },
  });

  const publicState = observable({
    get content() {
      const c = state.map[state.lang];
      if (!c || c instanceof Promise) {
        return null;
      }
      return c;
    },
    request() {
      state.deps += 1;
    },
    release() {
      state.deps -= 1;
    },
  });


  disposes.push(reaction(
    () => [serviceState.lang, state.active],
    () => {
      if (state.active) {
        state.loadLang();
      }
    },
  ));

  return publicState;
};

const switchLang = action((lang: string) => {
  serviceState.lang = lang;
});

export const langService = {
  state: serviceState,
  createLangLoader,
  switchLang,
};
