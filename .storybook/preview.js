import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './../src/theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import { MemoryRouter } from 'react-router-dom';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </ThemeProvider>
    </>
  ),
];
