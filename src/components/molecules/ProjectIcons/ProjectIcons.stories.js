import React from 'react';
import ProjectIcons from './ProjectIcons';

export default {
  title: 'Molecules/ProjectIcons',
  component: ProjectIcons,
};

const Template = args => <ProjectIcons {...args} />;

export const WithoutWebsiteLink = Template.bind({});
WithoutWebsiteLink.args = {
  githubLink: 'https://fake-github-link.com',
};

export const WithWebsiteLink = Template.bind({});
WithWebsiteLink.args = {
  githubLink: 'https://fake-github-link.com',
  websiteLink: 'https://fake-webiste-link.com',
};
