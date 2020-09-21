import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './../src/theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
];
