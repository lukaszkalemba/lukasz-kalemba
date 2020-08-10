import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

global.__PATH_PREFIX__ = '';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
