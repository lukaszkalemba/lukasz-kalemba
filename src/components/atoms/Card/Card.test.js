import React from 'react';
import { render } from 'utils/test-utils';
import 'jest-styled-components';
import Card from './Card';
import '__mocks__/intersectionObserver';

const props = {
  index: 1,
  title: 'Card title',
  image: {
    fluid: {
      aspectRatio: 0,
      sizes: '',
      src: '',
      srcSet: '',
    },
  },
  preSlug: 'pre-slug',
  slug: 'slug',
};

describe('<Card />', () => {
  it('renders correctly default variant', () => {
    const { getByTestId } = render(<Card {...props} />);

    const cardTitle = getByTestId('card-title');
    const cardLink = getByTestId('card-link');
    const cardArticle = getByTestId('card-article');

    expect(cardTitle.textContent).toBe('Card title');
    expect(cardLink.getAttribute('href')).toBe('/pre-slug/slug');

    expect(cardArticle).toHaveStyleRule('height', '450px');
  });
  it('renders correctly small variant', () => {
    const { getByTestId } = render(<Card {...props} small />);

    const cardArticle = getByTestId('card-article');

    expect(cardArticle).toHaveStyleRule('height', '300px');
  });
});
