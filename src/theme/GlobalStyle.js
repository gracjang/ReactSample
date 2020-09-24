import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 62,5%;
    font-family: "Montserrat", sans-serif;
  }
  body {
    font-size: 1.6rem;
  }
`;

export default GlobalStyle;
