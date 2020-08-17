import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import BlogPostHeroContent from './BlogPostHeroContent';

const animations = {
  paragraphVariants: {
    initial: { opacity: 0, x: -30 },
    animate: {
      opacity: 0.75,
      x: 0,
      transition: { duration: 0.75, delay: 0.25 },
    },
  },
};

export const blogPostHeroContent = () => (
  <BlogPostHeroContent
    title={text('Blog Post Hero Content Title', 'Lorem ipsum.')}
    description={text(
      'Blog Post Hero Content Description',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laudantium qui aliquam odio quidem ipsum! Vitae quaerat praesentium cumque quo quasi magnam ex provident sunt vero, ducimus libero, dolores ipsum.'
    )}
    animations={animations}
  />
);

export default {
  component: BlogPostHeroContent,
  decorators: [withKnobs],
  title: 'Molecules|BlogPostHeroContent',
};
