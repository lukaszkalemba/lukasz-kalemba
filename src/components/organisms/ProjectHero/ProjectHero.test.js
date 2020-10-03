import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import ProjectHero from './ProjectHero';

const projectHeroProps = {
  title: 'Fake project hero title',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  image: {
    aspectRatio: 0,
    sizes: '',
    src: '',
    srcSet: '',
  },
};

describe('<ProjectHero />', () => {
  it('has proper heading and description components inside', () => {
    const { getByRole, getByText } = render(
      <ProjectHero {...projectHeroProps} />
    );

    const contentHeading = getByRole('heading');
    const contentDescription = getByText(projectHeroProps.description);

    expect(contentHeading).toHaveTextContent(projectHeroProps.title);
    expect(contentDescription).toBeInTheDocument();
  });
});
