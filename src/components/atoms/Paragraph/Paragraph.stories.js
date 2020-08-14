import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import Paragraph from './Paragraph';

export const paragraph = () => (
  <Paragraph to="/">
    {text(
      'Paragraph Text',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    )}
  </Paragraph>
);

export default {
  component: Paragraph,
  decorators: [withKnobs],
  title: 'Atoms|Paragraph',
};
