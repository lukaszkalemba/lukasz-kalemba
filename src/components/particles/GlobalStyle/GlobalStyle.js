import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html {
    font-size: 62.5%;
    position: relative;
    min-height: 100%;
    overflow-x: hidden;

  ::before {
    content: '';
    background: linear-gradient(
      to right bottom,
      ${({ theme }) => theme.color.background.light},
      ${({ theme }) => theme.color.background.dark}
    ) no-repeat center center;
    background-size: cover;
    height: calc(100% + 80px);
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    will-change: transform;
    z-index: -1;
    }
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.montserrat}, sans-serif;
    min-height: 100vh;
    color: ${({ theme }) => theme.color.white};
    overflow-x: hidden;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
