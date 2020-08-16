import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import BlogPostContentItem from './BlogPostContentItem';

export const blogPostContentItem = () => (
  <BlogPostContentItem
    content={
      <>
        <h2>
          {text('Blog Post Content Item Title', 'Lorem ipsum dolor sit amet.')}
        </h2>
        <p>
          {text(
            'Blog Post Content Item Description',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit doloribus illum, aspernatur nulla id nihil suscipit consequuntur dolores expedita similique eveniet ex ullam, est libero beatae quam, placeat accusamus et.'
          )}
        </p>
      </>
    }
  />
);

export default {
  component: BlogPostContentItem,
  decorators: [withKnobs],
  title: 'Atoms|BlogPostContentItem',
};
