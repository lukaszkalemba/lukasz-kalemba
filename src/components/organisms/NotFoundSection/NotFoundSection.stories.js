import React from 'react';
import NotFoundSection from './NotFoundSection';

export default {
  title: 'Organisms/NotFoundSection',
  component: NotFoundSection,
};

const Template = args => <NotFoundSection {...args} />;

export const Default = Template.bind({});
Default.args = {};
