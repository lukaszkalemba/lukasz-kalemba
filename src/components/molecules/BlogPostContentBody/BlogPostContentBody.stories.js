import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import BlogPostContentBody from './BlogPostContentBody';

export const blogPostContentBody = () => (
  <BlogPostContentBody
    content={[
      <>
        <h2>
          {text(
            'First Blog Post Content Item Title',
            'Lorem ipsum dolor sit amet.'
          )}
        </h2>
      </>,
      <>
        <p>
          {text(
            'First Blog Post Content Item Description',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit doloribus illum, aspernatur nulla id nihil suscipit consequuntur dolores expedita similique eveniet ex ullam, est libero beatae quam, placeat accusamus et. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit doloribus illum, aspernatur nulla id nihil suscipit consequuntur dolores expedita similique eveniet ex ullam, est libero beatae quam, placeat accusamus et.'
          )}
        </p>
      </>,
      <>
        <h2>
          {text(
            'Second Blog Post Content Item Title',
            'Lorem ipsum dolor sit amet.'
          )}
        </h2>
      </>,
      <>
        <p>
          {text(
            'Second Blog Post Content Item Description',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit doloribus illum, aspernatur nulla id nihil suscipit consequuntur dolores expedita similique eveniet ex ullam, est libero beatae quam, placeat accusamus et. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit doloribus illum, aspernatur nulla id nihil suscipit consequuntur dolores expedita similique eveniet ex ullam, est libero beatae quam, placeat accusamus et.'
          )}
        </p>
      </>,
    ]}
  />
);

export default {
  component: BlogPostContentBody,
  decorators: [withKnobs],

  title: 'Molecules|BlogPostContentBody',
};
