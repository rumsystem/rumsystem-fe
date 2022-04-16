import React from 'react';

interface LoaderOptions {
  insertBeforeComment?: string
}

interface CSSModuleExport {
  type: 'css_module_export'
  toString: () => string
}

interface PoolItem {
  ref: number
  css: CSSModuleExport
  loaderOptions: LoaderOptions
  hash: string
}

const defaultPool = new Map<string, PoolItem>();
const ssrStyleContext = React.createContext(defaultPool);

export const createPoolContext = () => {
  const pool = new Map<string, PoolItem>();
  const context = React.createContext(pool);

  const Provider = (props: { children: React.ReactNode }) => (
    <ssrStyleContext.Provider value={pool}>
      {props.children}
    </ssrStyleContext.Provider>
  );
  return {
    pool,
    context,
    Provider,
  };
};

export const createHook = (css: CSSModuleExport, moduleHash: string, loaderOptions: LoaderOptions) => () => {
  const context = React.useContext(ssrStyleContext);

  if (typeof document === 'undefined') {
    const current = context.get(moduleHash);
    if (current) {
      current.ref += 1;
    } else {
      context.set(moduleHash, {
        css,
        loaderOptions,
        hash: moduleHash,
        ref: 1,
      });
    }
  }

  React.useEffect(() => {
    let styleTag: null | HTMLStyleElement = null;
    if (document) {
      styleTag = document.querySelector(`style[data-ssr-style-hash="${moduleHash}"]`) ?? document.createElement('style');
      styleTag.dataset.ssrStyleHash = moduleHash;
      const cssContent = css.toString();
      if (styleTag.innerHTML !== cssContent) {
        styleTag.innerHTML = css.toString();
      }
      if (loaderOptions.insertBeforeComment) {
        const commentNode = Array.from(document.head.childNodes)
          .filter((v) => v.nodeType === 8)
          .find((v) => v.textContent?.includes(loaderOptions.insertBeforeComment!))!;
        document.head.insertBefore(styleTag, commentNode);
      } else {
        document.head.appendChild(styleTag);
      }
    }

    return () => {
      if (styleTag) {
        styleTag.remove();
      }
    };
  }, []);
};
