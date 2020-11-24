import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyle from 'components/particles/GlobalStyle';

const GlobalWrapper = storyFn => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div>{storyFn()}</div>
  </ThemeProvider>
);

addDecorator(GlobalWrapper);
