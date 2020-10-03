import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import BlogPostHero from './BlogPostHero';

describe('<BlogPostHero />', () => {
  it('has proper heading, paragraph and scroll arrow components inside', () => {
    const blogPostHeroProps = {
      title: 'Lorem ipsum.',
      description: 'Lorem ipsum dolor sit amet.',
      image: {
        fluid: {
          aspectRatio: 0,
          sizes: '',
          src: '',
          srcSet: '',
        },
      },
    };

    const { getByRole, getByText } = render(
      <BlogPostHero {...blogPostHeroProps} />
    );

    const heading = getByRole('heading', { level: 1 });
    const paragraph = getByText(blogPostHeroProps.description);
    const scrollArrowInfo = getByText(/przesuń/i);

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(scrollArrowInfo).toBeInTheDocument();
  });
});
