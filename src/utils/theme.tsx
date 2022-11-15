import React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { createTheme, ThemeProvider, ThemeOptions } from '@mui/material';

declare module '@mui/material' {
  interface Palette {
    rum: Palette['primary']
    link: Palette['primary']
    link2: Palette['primary']
    black: Palette['primary']
  }
  interface PaletteOptions {
    rum: PaletteOptions['primary']
    link: PaletteOptions['primary']
    link2: PaletteOptions['primary']
    black: PaletteOptions['primary']
  }
  interface ColorOverrides {
    rum: true
    link: true
    link2: true
    black: true
  }
  interface ButtonPropsColorOverrides extends ColorOverrides {}
  interface InputBasePropsColorOverrides extends ColorOverrides {}
  interface FabPropsColorOverrides extends ColorOverrides {}
}

const themeOption: ThemeOptions = {
  palette: {
    primary: {
      main: '#333',
      contrastText: '#fff',
    },
    secondary: {
      main: '#1880b8',
    },
    rum: { main: '#ff931e' },
    link: { main: '#006fff' },
    link2: { main: '#0080ff' },
    black: {
      main: '#000',
      contrastText: '#fff',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: true,
        color: 'primary',
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '8px 12px',
          fontSize: '14px',
        },
      },
    },
  },
};

export const themeDarkOption = createTheme({
  ...themeOption,
  palette: {
    ...themeOption.palette as any,
    mode: 'dark',
    primary: {
      main: '#fff',
      contrastText: '#333',
    },
    action: {
      disabled: 'rgba(255, 255, 255, 0.6)',
      disabledBackground: 'rgba(255, 255, 255, 0.3)',
    },
  },
});

export const themeLightOption = createTheme({
  ...themeOption,
  palette: {
    ...themeOption.palette as any,
    mode: 'light',
    primary: {
      main: '#000',
    },
    action: {
      disabled: 'rgba(0, 0, 0, 0.44)',
      disabledBackground: 'rgba(0, 0, 0, 0.2)',
    },
  },
});

const cache = createCache({
  key: 'mui-css',
  insertionPoint: typeof document !== 'undefined'
    ? Array.from(document.head.childNodes)
      .filter((v) => v.nodeType === 8)
      .find((v) => v.textContent?.includes('mui-insertion-point')) as any
    : null,
});

export const ThemeRoot = (props: { children: React.ReactNode }) => (
  // replacement for StyledEngineProvider
  <CacheProvider value={cache}>
    <ThemeProvider theme={themeDarkOption}>
      {props.children}
    </ThemeProvider>
  </CacheProvider>
);

export const ThemeDark = (props: { children: React.ReactNode }) => (
  // replacement for StyledEngineProvider
  <ThemeProvider theme={themeDarkOption}>
    {props.children}
  </ThemeProvider>
);

export const ThemeLight = (props: { children: React.ReactNode }) => (
  // replacement for StyledEngineProvider
  <ThemeProvider theme={themeLightOption}>
    {props.children}
  </ThemeProvider>
);
