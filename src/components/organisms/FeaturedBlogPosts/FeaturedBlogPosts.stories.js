import React from 'react';
import FeaturedBlogPosts from './FeaturedBlogPosts';

export default {
  title: 'Organisms/FeaturedBlogPosts',
  component: FeaturedBlogPosts,
};

const Template = args => <FeaturedBlogPosts {...args} />;

export const Default = Template.bind({});
Default.args = {};
