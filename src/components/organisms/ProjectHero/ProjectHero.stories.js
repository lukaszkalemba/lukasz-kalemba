import React from 'react';
import ProjectHero from './ProjectHero';

export default {
  title: 'Organisms/ProjectHero',
  component: ProjectHero,
  argTypes: {
    image: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = args => <ProjectHero {...args} />;

export const WithoutWebsiteLink = Template.bind({});
WithoutWebsiteLink.args = {
  title: 'fake title',
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ducimus recusandae quos tenetur omnis adipisci et voluptatum eius autem aliquam.',
  githubLink: 'https://fake-github-link.com',
  image: {
    aspectRatio: 0,
    sizes: '',
    src: '',
    srcSet: '',
  },
};

export const WithWebsiteLink = Template.bind({});
WithWebsiteLink.args = {
  ...WithoutWebsiteLink.args,
  websiteLink: 'https://fake-webiste-link.com',
};
