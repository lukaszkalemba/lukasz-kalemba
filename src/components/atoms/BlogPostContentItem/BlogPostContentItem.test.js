import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import BlogPostContentItem from './BlogPostContentItem';

describe('<BlogPostContentItem />', () => {
  it('renders correctly with given HTML content', () => {
    const fakeContent = <p>Lorem ipsum dolor sit amet.</p>;

    const { getByTestId } = render(
      <BlogPostContentItem content={fakeContent} />
    );

    const blogPostContentItem = getByTestId('blog-post-content-item');

    expect(blogPostContentItem).toHaveTextContent(fakeContent.props.children);
  });
});
