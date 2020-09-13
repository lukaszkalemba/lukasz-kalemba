import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import CardsWrapper from './CardsWrapper';

const fakeProps = {
  items: {
    edges: [
      {
        node: {
          id: 0,
          image: {
            fluid: {
              aspectRatio: 0,
              sizes: '',
              src: '',
              srcSet: '',
            },
          },
          slug: 'fake-slug-0',
          title: 'fake card 0',
        },
      },
      {
        node: {
          id: 1,
          image: {
            fluid: {
              aspectRatio: 0,
              sizes: '',
              src: '',
              srcSet: '',
            },
          },
          slug: 'fake-slug-1',
          title: 'fake card 1',
        },
      },
      {
        node: {
          id: 2,
          image: {
            fluid: {
              aspectRatio: 0,
              sizes: '',
              src: '',
              srcSet: '',
            },
          },
          slug: 'fake-slug-2',
          title: 'fake card 2',
        },
      },
    ],
  },
  pageSlug: 'projekty',
  smallCards: false,
};

describe('<CardsWrapper />', () => {
  it('renders correctly with proper href attributes', () => {
    const { getAllByRole } = render(<CardsWrapper {...fakeProps} />);

    const cardsLinks = getAllByRole('link');

    for (let i = 0; i < fakeProps.items.edges.length; i += 1) {
      expect(cardsLinks[i]).toHaveAttribute(
        'href',
        `/${fakeProps.pageSlug}/${fakeProps.items.edges[i].node.slug}`
      );
    }

    expect(cardsLinks).toHaveLength(fakeProps.items.edges.length);
  });
});
