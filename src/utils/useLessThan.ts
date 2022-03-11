import React from 'react';


type SetItem = [number, React.Dispatch<React.SetStateAction<boolean>>];
const listeners = new Set<SetItem>();
const handleResize = () => {
  const innerWidth = window.innerWidth;
  Array.from(listeners).forEach((v) => {
    v[1](innerWidth < v[0]);
  });
};
window.addEventListener('resize', handleResize);

export const useLessThan = (width: number) => {
  const [state, setState] = React.useState(window.innerWidth < width);

  React.useEffect(() => {
    const item: SetItem = [width, setState];
    listeners.add(item);
    return () => {
      listeners.delete(item);
    };
  }, []);

  return state;
};
