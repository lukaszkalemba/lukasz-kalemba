import React from 'react';
import { addDecorator } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs';
import themeDecorator from 'utils/themeDecorator';
import Button from './Button';

addDecorator(themeDecorator);

export const primaryButton = () => (
  <Button type="button" priority="primary" path="/djsdj">
    {text('Button Text', 'Primary Button')}
  </Button>
);

primaryButton.story = {
  name: 'Primary Button',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/2o7dYUrPl9GFtAn7tAxzwj/.%2Fcodemon?node-id=2%3A9',
    },
  },
};

export const secondaryButton = () => (
  <Button type="button" priority="secondary" path="/djsdj">
    {text('Button Text', 'Secondary Button')}
  </Button>
);

secondaryButton.story = {
  name: 'Secondary Button',
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/2o7dYUrPl9GFtAn7tAxzwj/.%2Fcodemon?node-id=2%3A9',
    },
  },
};

export default {
  component: Button,
  decorators: [withKnobs, withDesign],
  title: 'Atoms|Button',
};
