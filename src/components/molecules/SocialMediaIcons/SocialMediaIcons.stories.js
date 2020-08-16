import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';

const variants = {
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0 },
  },
  initial: { opacity: 0, y: 20 },
};

export const socialMediaIcons = () => <SocialMediaIcons variants={variants} />;

export default {
  component: SocialMediaIcons,
  title: 'Molecules|SocialMediaIcons',
};
