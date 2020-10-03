import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import BlogPostContent from './BlogPostContent';

describe('<BlogPostContent />', () => {
  it('renders proper blog post content items with string content given', () => {
    const content =
      '<h2>Znaczenie brandingu</h2><p>Lorem ipsum dolor sit amet</p><h2>Znaczenie brandingu</h2><p>Lorem ipsum dolor sit amet</p>';

    const { getAllByTestId } = render(<BlogPostContent content={content} />);

    const blogPostContentItems = getAllByTestId('blog-post-content-item');

    expect(blogPostContentItems).toHaveLength(4);
  });
});
