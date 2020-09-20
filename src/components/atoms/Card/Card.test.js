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
    const { getByRole } = render(<Card {...fakeProps} />);

    const cardTitle = getByRole('heading');
    const cardLink = getByRole('link');
    const cardArticle = getByRole('article');

    expect(cardTitle).toHaveTextContent(fakeProps.title);
    expect(cardLink).toHaveAttribute(
      'href',
      `/${fakeProps.preSlug}/${fakeProps.slug}`
    );

    expect(cardArticle).toHaveStyleRule('height', '450px');
  });

  it('renders correctly small variant', () => {
    const { getByRole } = render(<Card {...fakeProps} small />);

    const cardArticle = getByRole('article');

    expect(cardArticle).toHaveStyleRule('height', '300px');
  });
});
