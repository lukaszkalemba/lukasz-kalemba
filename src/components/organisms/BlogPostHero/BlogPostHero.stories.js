import React from 'react';
import BlogPostHero from './BlogPostHero';

export default {
  title: 'Molecules/BlogPostHero',
  component: BlogPostHero,
  argTypes: {
    image: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = args => <BlogPostHero {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'fake title',
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ducimus recusandae quos tenetur omnis adipisci et voluptatum eius autem aliquam.',
  image: {
    fluid: {
      aspectRatio: 0,
      sizes: '',
      src: '',
      srcSet: '',
    },
  },
};
