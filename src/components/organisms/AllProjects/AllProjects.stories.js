import React from 'react';
import AllProjects from './AllProjects';

export default {
  title: 'Organisms/AllProjects',
  component: AllProjects,
};

const Template = args => <AllProjects {...args} />;

export const Default = Template.bind({});
Default.args = {};
