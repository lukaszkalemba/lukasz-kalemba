import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import ServicesCTASection from './ServicesCTASection';

describe('<ServicesCTASection />', () => {
  it('renders correctly and matches snapshot', () => {
    const { container } = render(<ServicesCTASection />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
