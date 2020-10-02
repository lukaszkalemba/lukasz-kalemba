import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import NotFoundSectionContent from './NotFoundSectionContent';

const renderNotFoundSectionContent = props => {
  const utils = render(<NotFoundSectionContent {...props} />);

  return { ...utils };
};

describe('<NotFoundSectionContent />', () => {
  it('renders with proper elements inside', () => {
    const { getByRole } = renderNotFoundSectionContent();

    expect(getByRole('heading')).toBeInTheDocument();
    expect(getByRole('link')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = renderNotFoundSectionContent();

    expect(container.firstChild).toMatchSnapshot();
  });
});
