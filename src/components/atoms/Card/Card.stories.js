import React from 'react';
import Card from './Card';

export default {
  title: 'Atoms/Card',
  component: Card,
  argTypes: {
    image: {
      table: {
        disable: true,
      },
    },
    slug: {
      table: {
        disable: true,
      },
    },
    preSlug: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card title',
  image: {
    fluid: {
      aspectRatio: 0,
      sizes: '',
      src: '',
      srcSet: '',
    },
  },
  preSlug: 'projects',
  slug: 'company',
  index: 2,
};

export const Offset = Template.bind({});
Offset.args = {
  ...Default.args,
  index: 1,
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  small: true,
};
