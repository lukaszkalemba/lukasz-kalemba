import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import BlogPostContent from './BlogPostContent';

export const blogPostContent = () => (
  <BlogPostContent
    content={`
      <h2>
        ${text('Blog Post Content Title', 'Lorem ipsum dolor sit amet.')}
      </h2>
      <p>
        ${text(
          'Blog Post Content Description',
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit doloribus illum, aspernatur nulla id nihil suscipit consequuntur dolores expedita similique eveniet ex ullam, est libero beatae quam, placeat accusamus et. Lorem ipsum, dolor sit amet consecteturadipisicing elit. Odit doloribus illum, aspernatur nulla id nihil suscipit consequuntur  dolores expedita similique eveniet exullam, est libero beatae quam, placeat accusamus et.'
        )}
      </p>`}
  />
);

export default {
  component: BlogPostContent,
  decorators: [withKnobs],
  title: 'Organisms|BlogPostContent',
};
