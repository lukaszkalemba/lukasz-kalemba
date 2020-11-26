import React from 'react';
import Copyright from './Copyright';

export default {
  title: 'Atoms/Copyright',
  component: Copyright,
};

const Template = args => <Copyright {...args} />;

export const Default = Template.bind({});
Default.args = {};
