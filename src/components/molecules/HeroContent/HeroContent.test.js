import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import HeroContent from './HeroContent';

describe('<HeroContent />', () => {
  it('renders correctly and matches snapshot', () => {
    const { container, getByText } = render(<HeroContent />);

    const heading = getByText(/zaistniej w sieci/i);
    const paragraph = getByText(/zaistniej w świecie/i);
    const pricingButton = getByText(/wycena/i);
    const projectsButton = getByText(/projekty/i);

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(pricingButton).toBeInTheDocument();
    expect(projectsButton).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
