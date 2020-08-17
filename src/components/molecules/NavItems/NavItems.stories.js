import React from 'react';
import NavItems from './NavItems';

export const openNavItems = () => <NavItems isNavOpen />;

export const closedNavItems = () => <NavItems isNavOpen={false} />;

export default {
  component: NavItems,
  title: 'Molecules|NavItems',
};
