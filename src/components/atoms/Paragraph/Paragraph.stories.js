import React from 'react';
import Paragraph from './Paragraph';

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph,
};

const Template = args => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  children:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores pariatur mollitia debitis facilis, a fugiat modi quas excepturi ab vel. Dolores nulla dolorem velit, beatae illum nemo inventore fugiat voluptate.',
};
