import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import ProjectHero from './ProjectHero';

export const projectHero = () => (
  <ProjectHero
    title={text('Project Hero Title', 'Lorem ipsum.')}
    description={text(
      'Project Hero Description',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim incidunt debitis consequatur provident veniam labore, vel voluptatibus tenetur unde assumenda similique nam voluptate repellendus, recusandae rerum. Officia architecto laudantium asperiores!'
    )}
    image={{ fluid: {} }}
  />
);

export default {
  component: ProjectHero,
  decorators: [withKnobs],
  title: 'Organisms|ProjectHero',
};
