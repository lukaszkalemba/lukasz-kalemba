import React from 'react';
import FeaturedProjects from './FeaturedProjects';

export default {
  title: 'Organisms/FeaturedProjects',
  component: FeaturedProjects,
};

const Template = args => <FeaturedProjects {...args} />;

export const Default = Template.bind({});
Default.args = {};
