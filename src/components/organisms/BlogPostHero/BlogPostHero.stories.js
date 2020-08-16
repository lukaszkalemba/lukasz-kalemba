import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import BlogPostHero from './BlogPostHero';

export const blogPostHero = () => (
  <BlogPostHero
    title={text('Blog Post Hero Title', 'Lorem ipsum dolor sit amet')}
    description={text(
      'Blog Post Hero Description',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laboriosam adipisci doloribus nihil! Ipsum dolores veniam assumenda! Fugit quas quisquam, exercitationem tenetur, laudantium ducimus, ad dignissimos aut autem impedit amet?'
    )}
    image={{ fluid: {} }}
  />
);

export default {
  component: BlogPostHero,
  decorators: [withKnobs],
  title: 'Organisms|BlogPostHero',
};
