import React from 'react';
import Nav from './Nav';

export default {
  title: 'Organisms/Nav',
  component: Nav,
};

const Template = args => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = {
  path: '/fake-path',
};

export const HomePageNav = Template.bind({});
HomePageNav.args = {
  path: '/',
};
