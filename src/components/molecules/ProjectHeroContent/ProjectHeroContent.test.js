import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import ProjectHeroContent from './ProjectHeroContent';

describe('<ProjectHeroContent />', () => {
  it('renders correctly with given props', () => {
    const fakeProps = {
      title: 'title',
      description: 'description',
    };

    const { getByRole, getByText } = render(
      <ProjectHeroContent {...fakeProps} />
    );

    const heading = getByRole('heading');
    const description = getByText(fakeProps.description);

    expect(heading).toHaveTextContent(fakeProps.title);
    expect(description).toBeInTheDocument();
  });
});
