import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import NavItem from './NavItem';

export const navigationItem = () => (
  <NavItem to="/">
    {text('Navigation Item Text', 'Navigation item text')}
  </NavItem>
);

export default {
  component: NavItem,
  decorators: [withKnobs],
  title: 'Atoms|NavItem',
};
