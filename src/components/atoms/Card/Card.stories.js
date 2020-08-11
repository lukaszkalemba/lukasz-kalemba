import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import Card from './Card';

export const bigCard = () => (
  <Card
    index={0}
    title={text('Card Title', 'Big card')}
    image={{ fluid: { tracedSVG: '' } }}
    preSlug="preslug"
    slug="slug"
  />
);

export const smallCard = () => (
  <Card
    index={0}
    title={text('Card Title', 'Small card')}
    image={{ fluid: { tracedSVG: '' } }}
    preSlug="preslug"
    slug="slug"
    small
  />
);

export default {
  component: Card,
  decorators: [withKnobs],
  title: 'Atoms|Card',
};
