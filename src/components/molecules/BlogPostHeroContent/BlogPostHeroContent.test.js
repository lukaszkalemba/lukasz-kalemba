import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import BlogPostHeroContent from './BlogPostHeroContent';

describe('<BlogPostHeroContent />', () => {
  it('renders correctly and matches snapshot', () => {
    const fakeTitle = 'fake blog post hero title';
    const fakeDescription =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

    const { container, getByRole, getByTestId } = render(
      <BlogPostHeroContent title={fakeTitle} description={fakeDescription} />
    );

    const title = getByRole('heading');
    const description = getByTestId('blog-post-hero-description');

    expect(title).toHaveTextContent(fakeTitle);
    expect(description).toHaveTextContent(fakeDescription);

    expect(container.firstChild).toMatchSnapshot();
  });
});
