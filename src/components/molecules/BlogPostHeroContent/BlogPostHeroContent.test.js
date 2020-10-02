import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import BlogPostHeroContent from './BlogPostHeroContent';

describe('<BlogPostHeroContent />', () => {
  it('renders properly with given props', () => {
    const blogPostHeroContentProps = {
      title: 'Lorem ipsum.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    };

    const { getByText } = render(
      <BlogPostHeroContent {...blogPostHeroContentProps} />
    );

    expect(getByText(blogPostHeroContentProps.title)).toBeInTheDocument();
    expect(getByText(blogPostHeroContentProps.description)).toBeInTheDocument();
  });
});
