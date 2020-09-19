import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import BlogPostHero from './BlogPostHero';

describe('<BlogPostHero />', () => {
  it('renders correctly with given props', () => {
    const fakeProps = {
      title: 'fake title',
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

    const { getByRole, getByText } = render(<BlogPostHero {...fakeProps} />);

    const heading = getByRole('heading', { level: 1 });
    const paragraph = getByText(fakeProps.description);
    const scrollArrowInfo = getByText(/przesuń/i);

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(scrollArrowInfo).toBeInTheDocument();
  });
});
