import React from 'react';
import HomePageHeroContent from './HomePageHeroContent';

export default {
  title: 'Molecules/HomePageHeroContent',
  component: HomePageHeroContent,
};

const Template = args => <HomePageHeroContent {...args} />;

export const Default = Template.bind({});
Default.args = {};
