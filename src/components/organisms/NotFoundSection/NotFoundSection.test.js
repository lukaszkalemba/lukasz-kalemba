import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import NotFoundSection from './NotFoundSection';

describe('<NotFoundSection />', () => {
  it('renders correctly with heading and link', () => {
    const { getByRole } = render(<NotFoundSection />);

    const heading = getByRole('heading');
    const link = getByRole('link');

    expect(heading).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});
