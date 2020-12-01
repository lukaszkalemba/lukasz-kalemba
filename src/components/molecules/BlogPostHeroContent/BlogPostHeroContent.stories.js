import React from 'react';
import BlogPostHeroContent from './BlogPostHeroContent';

export default {
  title: 'Molecules/BlogPostHeroContent',
  component: BlogPostHeroContent,
};

const Template = args => <BlogPostHeroContent {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Fake title',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, natus tempora totam quia harum deserunt necessitatibus, sint possimus veritatis dolores nemo voluptates nihil ipsum odio tenetur eveniet eum quaerat delectus?',
};
