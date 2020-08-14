import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import Link from './Link';

export const link = () => <Link to="/">{text('Link Text', 'Link')}</Link>;

export default {
  component: Link,
  decorators: [withKnobs],
  title: 'Atoms|Link',
};
