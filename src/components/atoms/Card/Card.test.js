import React from 'react';
import { render } from 'utils/test-utils';
import 'jest-styled-components';
import '__mocks__/intersectionObserver';
import Card from './Card';

const renderCard = props => {
  const utils = render(<Card {...props} />);

  return { ...utils };
};

const cardProps = {
  index: 1,
  title: 'Amazon',
  image: {
    fluid: {
      aspectRatio: 0,
      sizes: '',
      src: '',
      srcSet: '',
    },
  },
  preSlug: 'projekty',
  slug: 'amazon',
};

describe('<Card />', () => {
  it('renders properly heading, link and article', () => {
    const { getByRole } = renderCard(cardProps);

    expect(getByRole('heading')).toHaveTextContent(cardProps.title);
    expect(getByRole('link')).toHaveAttribute(
      'href',
      `/${cardProps.preSlug}/${cardProps.slug}`
    );
  });

  it('has proper styles if variant is set to small', () => {
    const { getByRole } = renderCard(cardProps);

    expect(getByRole('article')).toHaveStyleRule('height', '450px');
  });

  it('has proper styles if variant is set to small', () => {
    const smallCardProps = {
      ...cardProps,
      small: true,
    };

    const { getByRole } = renderCard(smallCardProps);

    expect(getByRole('article')).toHaveStyleRule('height', '300px');
  });
});
