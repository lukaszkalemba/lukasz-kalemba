import React from 'react';
import ContactInformations from './ContactInformations';

export default {
  title: 'Molecules/ContactInformations',
  component: ContactInformations,
};

const Template = args => <ContactInformations {...args} />;

export const Default = Template.bind({});
Default.args = {};
