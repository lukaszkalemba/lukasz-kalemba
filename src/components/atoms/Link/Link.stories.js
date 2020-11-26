import React from 'react';
import Link from './Link';

export default {
  title: 'Atoms/Link',
  component: Link,
};

const Template = args => <Link {...args} />;

export const Animated = Template.bind({});
Animated.args = {
  children: 'animated link',
  to: '/fake-path',
  animate: true,
};

export const NonAnimated = Template.bind({});
NonAnimated.args = {
  children: 'non-animated link',
  to: '/fake-path',
  animate: false,
};
