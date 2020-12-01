import React from 'react';
import FooterLinks from './FooterLinks';

export default {
  title: 'Molecules/FooterLinks',
  component: FooterLinks,
};

const Template = args => <FooterLinks {...args} />;

export const Default = Template.bind({});
Default.args = {};
