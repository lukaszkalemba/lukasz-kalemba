import React from 'react';
import { render } from 'utils/test-utils';
import 'jest-styled-components';
import '__mocks__/intersectionObserver';
import Card from './Card';

const fakeProps = {
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
    const { getByTestId } = render(<Card {...fakeProps} />);

    const cardTitle = getByTestId('card-title');
    const cardLink = getByTestId('card-link');
    const cardArticle = getByTestId('card-article');

    expect(cardTitle.textContent).toBe(fakeProps.title);
    expect(cardLink.getAttribute('href')).toBe(
      `/${fakeProps.preSlug}/${fakeProps.slug}`
    );

    expect(cardArticle).toHaveStyleRule('height', '450px');
  });
  it('renders correctly small variant', () => {
    const { getByTestId } = render(<Card {...fakeProps} small />);

    const cardArticle = getByTestId('card-article');

    expect(cardArticle).toHaveStyleRule('height', '300px');
  });
});
