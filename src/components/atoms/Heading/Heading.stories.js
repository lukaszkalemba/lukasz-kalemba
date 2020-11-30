import React from 'react';
import Heading from './Heading';

export default {
  title: 'Atoms/Heading',
  component: Heading,
};

const Template = args => <Heading {...args} />;

export const H1 = Template.bind({});
H1.args = {
  children: 'Heading',
  isH1: true,
};

export const H2 = Template.bind({});
H2.args = {
  children: 'Heading',
};
