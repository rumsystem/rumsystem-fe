import React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333',
      contrastText: '#fff',
    },
    secondary: {
      main: '#1880b8',
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

export const ThemeRoot = (props: { children: React.ReactNode }) => (process.env.SSR
  ? (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
  : (
  // replacement for StyledEngineProvider
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        {props.children}
      </ThemeProvider>
    </CacheProvider>
  ));
