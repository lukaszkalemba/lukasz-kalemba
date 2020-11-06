import React from 'react';
import { render } from 'utils/test-utils';
import ProjectIcons from './ProjectIcons';

const renderProjectIcons = props => {
  const utils = render(<ProjectIcons {...props} />);

  const githubLink = utils.queryByTestId('github-link');
  const websiteLink = utils.queryByTestId('website-link');

  return { ...utils, githubLink, websiteLink };
};

describe('<ProjectIcons />', () => {
  it("has github link and don't have website link inside", () => {
    const { githubLink, websiteLink } = renderProjectIcons({
      githubLink: 'https://fakelink.com',
    });

    expect(githubLink).toBeInTheDocument();
    expect(websiteLink).not.toBeInTheDocument();
  });

  it('has github link and website link inside', () => {
    const { githubLink, websiteLink } = renderProjectIcons({
      githubLink: 'https://fakelink.com',
      websiteLink: 'https://fakelink.com',
    });

    expect(githubLink).toBeInTheDocument();
    expect(websiteLink).toBeInTheDocument();
  });
});
