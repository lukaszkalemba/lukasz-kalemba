import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import NotFoundSection from './NotFoundSection';

describe('<NotFoundSection />', () => {
  it('renders correctly with heading and button', () => {
    const { getByRole } = render(<NotFoundSection />);

    const heading = getByRole('heading');
    const button = getByRole('button');

    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
