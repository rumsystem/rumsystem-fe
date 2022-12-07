import { useEffect, useRef } from 'react';

export const BigImageContainer = (props: { img: null | HTMLImageElement }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.img) {
      ref.current?.append(props.img);
    } else {
      ref.current?.childNodes.forEach((v) => {
        ref.current?.removeChild(v);
      });
    }
  }, [props.img]);

  return (
    <div ref={ref} />
  );
};
