import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import CardsWrapper from './CardsWrapper';

const cardsWrapperProps = {
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
          slug: 'amazon',
          title: 'amazon',
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
          slug: 'apple',
          title: 'apple',
        },
      },
    ],
  },
  pageSlug: 'projekty',
  smallCards: false,
};

describe('<CardsWrapper />', () => {
  it('has proper href attributes', () => {
    const { getAllByRole } = render(<CardsWrapper {...cardsWrapperProps} />);

    const cardsLinks = getAllByRole('link');

    for (let i = 0; i < cardsWrapperProps.items.edges.length; i += 1) {
      expect(cardsLinks[i]).toHaveAttribute(
        'href',
        `/${cardsWrapperProps.pageSlug}/${cardsWrapperProps.items.edges[i].node.slug}`
      );
    }

    expect(cardsLinks).toHaveLength(cardsWrapperProps.items.edges.length);
  });
});
