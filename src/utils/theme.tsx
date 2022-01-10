import React from 'react';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material';

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
  // components: {
  //   MuiTypography: {
  //     styleOverrides: {
  //       body1: {
  //         fontFamily: 'inherit',
  //       },
  //     },
  //   },
  //   MuiInputLabel: {
  //     styleOverrides: {
  //       outlined: {
  //         fontSize: '14px',
  //       },
  //     },
  //   },
  //   MuiInputBase: {
  //     styleOverrides: {
  //       input: {
  //         fontSize: '14px',
  //       },
  //     },
  //   },
  // },
});

export const ThemeRoot = (props: { children: React.ReactNode }) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  </StyledEngineProvider>
);
