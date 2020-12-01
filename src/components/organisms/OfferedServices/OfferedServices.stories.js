import React from 'react';
import OfferedServices from './OfferedServices';

export default {
  title: 'Organisms/OfferedServices',
  component: OfferedServices,
};

const Template = args => <OfferedServices {...args} />;

export const Default = Template.bind({});
Default.args = {};
