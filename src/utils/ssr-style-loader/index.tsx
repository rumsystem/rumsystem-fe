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
  styleTag: null | HTMLStyleElement
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
    const item = context.get(moduleHash) ?? {
      css,
      loaderOptions,
      hash: moduleHash,
      ref: 0,
      styleTag: null,
    };
    item.ref += 1;
    context.set(moduleHash, item);
  }

  React.useEffect(() => {
    const item = context.get(moduleHash) ?? {
      css,
      loaderOptions,
      hash: moduleHash,
      ref: 0,
      styleTag: document.querySelector(`style[data-ssr-style-hash="${moduleHash}"]`) ?? document.createElement('style'),
    };
    item.ref += 1;
    context.set(moduleHash, item);

    item.styleTag = document.querySelector(`style[data-ssr-style-hash="${moduleHash}"]`) ?? document.createElement('style');
    item.styleTag.dataset.ssrStyleHash = moduleHash;
    const cssContent = css.toString();
    if (item.styleTag.innerHTML !== cssContent) {
      item.styleTag.innerHTML = css.toString();
    }
    if (loaderOptions.insertBeforeComment) {
      const commentNode = Array.from(document.head.childNodes)
        .filter((v) => v.nodeType === 8)
        .find((v) => v.textContent?.includes(loaderOptions.insertBeforeComment!))!;
      document.head.insertBefore(item.styleTag, commentNode);
    } else {
      document.head.appendChild(item.styleTag);
    }

    return () => {
      setTimeout(() => {
        item.ref -= 1;
        if (item.ref === 0) {
          context.delete(moduleHash);
        }
        item.styleTag?.remove();
      });
    };
  }, []);
};
