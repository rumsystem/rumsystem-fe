declare module '*.css';
declare module '*.png';
declare module '*.svg' {
  import React from 'react';

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;

  const src: string;

  export default src;
}
