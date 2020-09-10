import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import BlogPostContentBody from './BlogPostContentBody';

describe('<BlogPostContentBody />', () => {
  it('renders correctly and matches snapshot', () => {
    const fakeContent = [
      <div key="0" />,
      <div key="1" />,
      <div key="2" />,
      <div key="3" />,
      <div key="4" />,
    ];
    const { container } = render(<BlogPostContentBody content={fakeContent} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
