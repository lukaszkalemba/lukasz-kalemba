import React from 'react';
import Logo from './Logo';

export default {
  title: 'Atoms/Logo',
  component: Logo,
};

const Template = args => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  path: '/fake-path',
};

export const HomePageLogo = Template.bind({});
HomePageLogo.args = {
  path: '/',
};
