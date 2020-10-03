import React from 'react';
import { render } from 'utils/test-utils';
import * as Gatsby from 'gatsby';
import '__mocks__/intersectionObserver';
import FeaturedBlogPosts from './FeaturedBlogPosts';

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

describe('<FeaturedBlogPosts />', () => {
  it('has proper heading, cards and link components inside', () => {
    const { getByRole, getAllByRole, getByText } = render(
      <FeaturedBlogPosts />
    );

    const sectionHeading = getByRole('heading', { level: 2 });
    const cards = getAllByRole('article');
    const allBlogPostsLinks = getByText(/sprawdź inne/i);

    expect(sectionHeading).toBeInTheDocument();
    expect(cards).toHaveLength(2);
    expect(allBlogPostsLinks).toHaveAttribute('href', '/blog');
  });
});
