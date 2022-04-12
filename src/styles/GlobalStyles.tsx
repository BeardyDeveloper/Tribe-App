import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';

import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle<{ language: string }>`
  ${normalize}

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after,
  * *
   {
    box-sizing: inherit;
    letter-spacing: 0.06px;
    font-family: ${({ theme }) => theme.typography.fontFamily.medium};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  }

  body {
    padding: 0;
    margin: 0 auto;
    letter-spacing: 0.06px;
    font-family: ${({ theme }) => theme.typography.fontFamily.medium};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    background-color: ${({ theme }) => theme.background.light};
    font-style: normal;
    font-display: swap;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-stretch: normal;
    user-select: none;
    overflow-x: hidden;
    vertical-align: baseline;
    height: 100vh;

    div#__next {
      height: 100%;
    }

    /* remove iOS touch tap highlight */
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-user-select: none;
    -webkit-touch-callout: none;

    button {
      all: unset;
    }
    input {
      all: unset;
    }

    a,
    a:hover {
      text-decoration: none;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
    }
   
    .ck-content {
      height: auto;
      min-height: 200px;
    }
  }
`;
