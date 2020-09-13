import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import NotFoundSectionContent from './NotFoundSectionContent';

describe('<NotFoundSectionContent />', () => {
  it('renders correctly and matches snapshot', () => {
    const { container, getByRole } = render(<NotFoundSectionContent />);

    const heading = getByRole('heading');
    const button = getByRole('button');

    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
