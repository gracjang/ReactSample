import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from '../../theme/mainTheme';

const Root = () => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <h1>Hejka Gracjan</h1>
          <Button>This is button</Button>
          <Button secondary>Reset</Button>
        </>
      </ThemeProvider>
    </div>
  );
};

export default Root;
