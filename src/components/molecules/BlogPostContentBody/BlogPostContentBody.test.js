import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import BlogPostContentBody from './BlogPostContentBody';

describe('<BlogPostContentBody />', () => {
  it('renders correctly with given HTML content', () => {
    const fakeContent = [
      <div key="0">fake content item 0</div>,
      <div key="1">fake content item 1</div>,
      <div key="2">fake content item 2</div>,
      <div key="3">fake content item 3</div>,
      <div key="4">fake content item 4</div>,
    ];

    const { getAllByTestId } = render(
      <BlogPostContentBody content={fakeContent} />
    );

    const blogPostContentItems = getAllByTestId('blog-post-content-item');

    for (let i = 0; i < fakeContent.length; i += 1) {
      expect(blogPostContentItems[i]).toHaveTextContent(
        fakeContent[i].props.children
      );
    }

    expect(blogPostContentItems).toHaveLength(fakeContent.length);
  });
});
