import React from 'react';
import AllBlogPosts from './AllBlogPosts';

export default {
  title: 'Organisms/AllBlogPosts',
  component: AllBlogPosts,
};

const Template = args => <AllBlogPosts {...args} />;

export const Default = Template.bind({});
Default.args = {};
