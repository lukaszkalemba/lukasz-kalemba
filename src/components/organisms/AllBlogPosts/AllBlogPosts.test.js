import React from 'react';
import { render } from 'utils/test-utils';
import * as Gatsby from 'gatsby';
import '__mocks__/intersectionObserver';
import AllBlogPosts from './AllBlogPosts';

beforeEach(() => {
  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

  useStaticQuery.mockImplementation(() => ({
    blogPosts: {
      edges: [
        {
          node: {
            id: 0,
            title: 'fake blog post 0',
            content: 'Lorem ipsum dolor sit amet.',
            slug: 'fake-slug-0',
            image: {
              fluid: {
                aspectRatio: 0,
                sizes: '',
                src: '',
                srcSet: '',
              },
            },
          },
        },
        {
          node: {
            id: 1,
            title: 'fake blog post 1',
            content: 'Lorem ipsum dolor sit amet.',
            slug: 'fake-slug-1',
            image: {
              fluid: {
                aspectRatio: 0,
                sizes: '',
                src: '',
                srcSet: '',
              },
            },
          },
        },
      ],
    },
  }));
});

describe('<AllBlogPosts />', () => {
  it('renders correctly with heading and cards', () => {
    const { getByRole, getAllByRole } = render(<AllBlogPosts />);

    const pageHeading = getByRole('heading', { level: 1 });

    const cards = getAllByRole('article');

    expect(pageHeading).toBeInTheDocument();
    expect(cards).toHaveLength(2);
  });
});
