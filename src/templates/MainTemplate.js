import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import PropTypes from 'prop-types';
import { theme } from 'theme/mainTheme';

const MainTemplate = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
