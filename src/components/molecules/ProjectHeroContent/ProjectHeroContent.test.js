import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import ProjectHeroContent from './ProjectHeroContent';

describe('<ProjectHeroContent />', () => {
  it('renders correctly with proper data', () => {
    const fakeProps = {
      title: '',
      description: '',
    };

    const { getByRole, getByTestId } = render(
      <ProjectHeroContent {...fakeProps} />
    );

    const heading = getByRole('heading');
    const description = getByTestId('project-hero-description');

    expect(heading).toHaveTextContent(fakeProps.title);
    expect(description).toHaveTextContent(fakeProps.description);
  });
});
