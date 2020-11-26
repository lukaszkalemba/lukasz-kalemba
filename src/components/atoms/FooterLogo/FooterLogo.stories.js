import React from 'react';
import FooterLogo from './FooterLogo';

export default {
  title: 'Atoms/FooterLogo',
  component: FooterLogo,
};

const Template = args => <FooterLogo {...args} />;

export const Default = Template.bind({});
Default.args = {};
