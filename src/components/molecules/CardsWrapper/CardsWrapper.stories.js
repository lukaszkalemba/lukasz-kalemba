import React from 'react';
import CardsWrapper from './CardsWrapper';

const items = {
  edges: [
    {
      node: {
        id: '0',
        slug: 'slug',
        title: 'Lorem ipsum',
        image: { fluid: {} },
      },
    },
    {
      node: {
        id: '1',
        slug: 'slug',
        title: 'Lorem ipsum',
        image: { fluid: {} },
      },
    },
  ],
};

export const bigCardsWrapper = () => (
  <CardsWrapper items={items} pageSlug="page-slug" />
);

export const smallCardsWrapper = () => (
  <CardsWrapper items={items} pageSlug="page-slug" smallCards />
);

export default {
  component: CardsWrapper,
  title: 'Molecules|CardsWrapper',
};
