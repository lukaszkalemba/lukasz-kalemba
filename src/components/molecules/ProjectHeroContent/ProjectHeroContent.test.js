import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import ProjectHeroContent from './ProjectHeroContent';

describe('<ProjectHeroContent />', () => {
  it('has proper children content based on props', () => {
    const projectHeroContentProps = {
      title: 'title',
      description: 'description',
    };

    const { getByRole, getByText } = render(
      <ProjectHeroContent {...projectHeroContentProps} />
    );

    expect(getByRole('heading')).toHaveTextContent(
      projectHeroContentProps.title
    );
    expect(getByText(projectHeroContentProps.description)).toBeInTheDocument();
  });
});
