import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import Service from './Service';

export const service = () => (
  <Service img={{ fluid: {} }}>
    {text('Service Title', 'Service title')}
  </Service>
);

export default {
  component: Service,
  decorators: [withKnobs],
  title: 'Atoms|Service',
};
