import React from 'react';
import { render } from 'utils/test-utils';
import * as Gatsby from 'gatsby';
import '__mocks__/intersectionObserver';
import FeaturedProjects from './FeaturedProjects';

beforeEach(() => {
  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

  useStaticQuery.mockImplementation(() => ({
    projects: {
      edges: [
        {
          node: {
            id: 0,
            title: 'fake blog post 0',
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

describe('<FeaturedProjects />', () => {
  it('renders correctly with proper content values', () => {
    const { getByRole, getAllByRole, getByText } = render(<FeaturedProjects />);

    const sectionHeading = getByRole('heading', { level: 2 });
    const cards = getAllByRole('article');
    const allProjectsLink = getByText(/sprawdź inne/i);

    expect(sectionHeading).toBeInTheDocument();
    expect(cards).toHaveLength(2);
    expect(allProjectsLink).toHaveAttribute('href', '/projekty');
  });
});
