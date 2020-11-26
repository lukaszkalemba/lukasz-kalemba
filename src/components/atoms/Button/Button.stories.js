import React from 'react';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'submit',
  priority: 'primary',
  children: 'Submit text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'submit',
  priority: 'secondary',
  children: 'Submit text',
};

export const Link = Template.bind({});
Link.args = {
  type: 'link',
  path: '/link-path',
  priority: 'secondary',
  children: 'Link text',
};
