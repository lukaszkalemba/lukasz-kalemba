import React from 'react';
import HomePageHero from './HomePageHero';

export default {
  title: 'Organisms/HomePageHero',
  component: HomePageHero,
};

const Template = args => <HomePageHero {...args} />;

export const Default = Template.bind({});
Default.args = {};
