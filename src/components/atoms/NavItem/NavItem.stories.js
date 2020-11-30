import React from 'react';
import NavItem from './NavItem';

export default {
  title: 'Atoms/NavItem',
  component: NavItem,
};

const Template = args => <NavItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  path: '/fake-path',
  name: 'fake page',
  closeNav: () => {},
};
