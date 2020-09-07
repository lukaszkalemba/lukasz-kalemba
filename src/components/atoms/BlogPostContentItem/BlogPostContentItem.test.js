import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import BlogPostContentItem from './BlogPostContentItem';

describe('<BlogPostContentItem />', () => {
  it('renders correctly', () => {
    const { container } = render(
      <BlogPostContentItem content={<p>Lorem ipsum dolor sit amet.</p>} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
