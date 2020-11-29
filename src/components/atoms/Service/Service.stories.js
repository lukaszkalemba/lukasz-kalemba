import React from 'react';
import Service from './Service';

export default {
  title: 'Atoms/Service',
  component: Service,
  argTypes: {
    image: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = args => <Service {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Service title',
  image: {
    fluid: {
      aspectRatio: 0,
      sizes: '',
      src: '',
      srcSet: '',
    },
  },
};
