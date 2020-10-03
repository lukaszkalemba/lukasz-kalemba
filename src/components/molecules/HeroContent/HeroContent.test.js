import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import HeroContent from './HeroContent';

describe('<HeroContent />', () => {
  it('renders with proper elements inside', () => {
    const { getByText } = render(<HeroContent />);

    expect(getByText(/zaistniej w sieci/i)).toBeInTheDocument();
    expect(getByText(/zaistniej w świecie/i)).toBeInTheDocument();
    expect(getByText(/wycena/i)).toBeInTheDocument();
    expect(getByText(/projekty/i)).toBeInTheDocument();
  });
});
