import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import ProjectHero from './ProjectHero';

const sharedProps = {
  title: 'Fake project hero title',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  githubLink: 'https://fakelink.com',
  image: {
    aspectRatio: 0,
    sizes: '',
    src: '',
    srcSet: '',
  },
};

const renderProjectHero = props => {
  const utils = render(<ProjectHero {...sharedProps} {...props} />);

  const githubLink = utils.queryByTestId('github-link');
  const websiteLink = utils.queryByTestId('website-link');

  return { ...utils, githubLink, websiteLink };
};

describe('<ProjectHero />', () => {
  it('has proper heading and description components inside', () => {
    const { getByRole, getByText } = renderProjectHero();

    const contentHeading = getByRole('heading');
    const contentDescription = getByText(sharedProps.description);

    expect(contentHeading).toHaveTextContent(sharedProps.title);
    expect(contentDescription).toBeInTheDocument();
  });

  it("has github link and don't have website link inside", () => {
    const { githubLink, websiteLink } = renderProjectHero();

    expect(githubLink).toBeInTheDocument();
    expect(websiteLink).not.toBeInTheDocument();
  });

  it('has github link and website link inside', () => {
    const { githubLink, websiteLink } = renderProjectHero({
      websiteLink: 'https://fakelink.com',
    });

    expect(githubLink).toBeInTheDocument();
    expect(websiteLink).toBeInTheDocument();
  });
});
