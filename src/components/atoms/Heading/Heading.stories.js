import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import Heading from './Heading';

export const pageHeading = () => (
  <Heading tag="h1">{text('Heading text', 'Page heading')}</Heading>
);

export const sectionHeading = () => (
  <Heading tag="h2">{text('Heading text', 'Section heading')}</Heading>
);

export default {
  component: Heading,
  decorators: [withKnobs],
  title: 'Atoms|Heading',
};
