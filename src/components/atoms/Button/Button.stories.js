import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import Button from './Button';

export const primaryButton = () => (
  <Button type="button" priority="primary" path="/">
    {text('Button Text', 'Primary Button')}
  </Button>
);

export const secondaryButton = () => (
  <Button type="button" priority="secondary" path="/">
    {text('Button Text', 'Secondary Button')}
  </Button>
);

export default {
  component: Button,
  decorators: [withKnobs],
  title: 'Atoms|Button',
};
