import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyle from 'components/particles/GlobalStyle';

addParameters({
  docs: {
    theme: themes.dark,
  },
});

const GlobalWrapper = storyFn => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div style={{ padding: '15px 30px' }}>{storyFn()}</div>
  </ThemeProvider>
);

addDecorator(GlobalWrapper);
