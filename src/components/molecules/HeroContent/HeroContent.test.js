import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import HeroContent from './HeroContent';

const renderHeroContent = props => {
  const utils = render(<HeroContent {...props} />);

  return { ...utils };
};

describe('<HeroContent />', () => {
  it('renders with proper elements inside', () => {
    const { getByText } = renderHeroContent();

    expect(getByText(/zaistniej w sieci/i)).toBeInTheDocument();
    expect(getByText(/zaistniej w świecie/i)).toBeInTheDocument();
    expect(getByText(/wycena/i)).toBeInTheDocument();
    expect(getByText(/projekty/i)).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = renderHeroContent();

    expect(container.firstChild).toMatchSnapshot();
  });
});
