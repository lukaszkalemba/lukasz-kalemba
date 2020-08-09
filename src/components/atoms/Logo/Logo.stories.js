import React from 'react';
import { addDecorator } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import themeDecorator from 'utils/themeDecorator';
import Logo from './Logo';

addDecorator(themeDecorator);

export const primaryLogo = () => <Logo />;

primaryLogo.story = {
  name: 'Primary Logo',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/2o7dYUrPl9GFtAn7tAxzwj/.%2Fcodemon?node-id=2%3A9',
    },
  },
};

export default {
  component: Logo,
  decorators: [withDesign],
  title: 'Atoms|Logo',
};
