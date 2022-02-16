import React, { ImgHTMLAttributes } from 'react';

/** img with size hint to prevent layout shift */
export const ImgBox = (props: ImgHTMLAttributes<Element>) => {
  const { width, height, ...restProps } = props;

  const imgRef = React.useRef<HTMLImageElement>(null);

  const [size, setSize] = React.useState({
    ...width ? { width: `${width}px` } : {},
    ...height ? { height: `${height}px` } : {},
  });

  const handleOnLoad = () => {
    setSize({});
  };


  return (
    <img
      {...restProps}
      style={size}
      ref={imgRef}
      onLoad={handleOnLoad}
    />
  );
};
