import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import HeroContent from './HeroContent';

describe('<HeroContent />', () => {
  it('renders correctly and matches snapshot', () => {
    const { container } = render(<HeroContent />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
