import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import HomePageHero from './HomePageHero';

describe('<HomePageHero />', () => {
  it('has proper heading, paragraph and buttons components inside', () => {
    const { getByText } = render(<HomePageHero />);

    const heading = getByText(/zaistniej w sieci/i);
    const paragraph = getByText(/zaistniej w świecie/i);
    const pricingButton = getByText(/wycena/i);
    const projectsButton = getByText(/projekty/i);

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(pricingButton).toBeInTheDocument();
    expect(projectsButton).toBeInTheDocument();
  });
});
