import React from 'react';

export const getTitle = (title?: string) => (title
  ? `${title} - Rumsystem`
  : 'Rumsystem');

const defaultTitleContextValue = { title: 'Rumsystem' };
const titleContext = React.createContext(defaultTitleContextValue);

const createTitleContext = () => {
  const value = { title: 'Rumsystem' };
  const Provider = (props: { children: React.ReactNode }) => (
    <titleContext.Provider value={value}>
      {props.children}
    </titleContext.Provider>
  );

  return {
    Provider,
    value,
  };
};

const useSetTitle = (title?: string) => {
  if (process.env.SSR) {
    const context = React.useContext(titleContext);
    context.title = getTitle(title);
  }
  React.useEffect(() => {
    document.title = getTitle(title);
    return () => {
      document.title = getTitle();
    };
  }, []);
};


export const titleService = {
  createTitleContext,
  useSetTitle,
};
