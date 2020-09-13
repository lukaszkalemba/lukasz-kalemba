import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import BlogPostHeroContent from './BlogPostHeroContent';

describe('<BlogPostHeroContent />', () => {
  it('renders correctly with given props', () => {
    const fakeProps = {
      title: 'fake blog post hero title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    };

    const { getByText } = render(<BlogPostHeroContent {...fakeProps} />);

    const title = getByText(fakeProps.title);
    const description = getByText(fakeProps.description);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
