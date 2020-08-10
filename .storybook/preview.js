import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import GlobalStyle from 'components/particles/GlobalStyle';

global.__PATH_PREFIX__ = '';

configure(require.context('../src/components', true, /\.stories\.js$/), module);

const GlobalWrapper = storyFn => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
);

addDecorator(GlobalWrapper);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
