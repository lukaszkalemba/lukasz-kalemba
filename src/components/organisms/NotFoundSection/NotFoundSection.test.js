import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import NotFoundSection from './NotFoundSection';

describe('<NotFoundSection />', () => {
  it('has proper heading and link components inside', () => {
    const { getByRole } = render(<NotFoundSection />);

    expect(getByRole('heading')).toBeInTheDocument();
    expect(getByRole('link')).toBeInTheDocument();
  });
});
