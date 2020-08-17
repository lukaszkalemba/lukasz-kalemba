import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import ProjectHeroContent from './ProjectHeroContent';

const animations = {
  descriptionVariants: {
    animate: {
      opacity: 0.8,
      x: 0,
      transition: { duration: 0.8, delay: 0.25 },
    },
    initial: { opacity: 0, x: -30 },
  },
};

export const projectHeroContent = () => (
  <ProjectHeroContent
    title={text('Project Hero Content Title', 'Lorem ipsum.')}
    description={text(
      'Project Hero Content Description',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laudantium qui aliquam odio quidem ipsum! Vitae quaerat praesentium cumque quo quasi magnam ex provident sunt vero, ducimus libero, dolores ipsum.'
    )}
    animations={animations}
  />
);

export default {
  component: ProjectHeroContent,
  decorators: [withKnobs],
  title: 'Molecules|ProjectHeroContent',
};
