import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import ServicesCTASection from './ServicesCTASection';

describe('<ServicesCTASection />', () => {
  it('renders correctly and matches snapshot', () => {
    const { container, getByRole } = render(<ServicesCTASection />);

    const heading = getByRole('heading');
    const link = getByRole('link');

    expect(heading).toBeInTheDocument();
    expect(link).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
