import React from 'react';
import PricingContent from './PricingContent';

export default {
  title: 'Organisms/PricingContent',
  component: PricingContent,
};

const Template = args => <PricingContent {...args} />;

export const Default = Template.bind({});
Default.args = {};
