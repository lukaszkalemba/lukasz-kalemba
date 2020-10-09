import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import montserratBoldWoff2 from 'assets/fonts/montserrat-bold.woff2';
import montserratBoldWoff from 'assets/fonts/montserrat-bold.woff';
import montserratMediumWoff2 from 'assets/fonts/montserrat-medium.woff2';
import montserratMediumWoff from 'assets/fonts/montserrat-medium.woff';
import montserratRegularWoff2 from 'assets/fonts/montserrat-regular.woff2';
import montserratRegularWoff from 'assets/fonts/montserrat-regular.woff';

const fontFamily = 'Montserrat';

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  @font-face {
    font-family: ${fontFamily};
    src: url(${montserratBoldWoff2}) format('woff2'),
      url(${montserratBoldWoff}) format('woff');
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-style: normal;
  }
  @font-face {
    font-family: ${fontFamily};
    src: url(${montserratMediumWoff2}) format('woff2'),
      url(${montserratMediumWoff}) format('woff');
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-style: normal;
  }
  @font-face {
    font-family: ${fontFamily};
    src: url(${montserratRegularWoff2}) format('woff2'),
      url(${montserratRegularWoff}) format('woff');
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-style: normal;
  }

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
