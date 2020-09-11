import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import NotFoundSectionContent from './NotFoundSectionContent';

describe('<NotFoundSectionContent />', () => {
  it('renders correctly and matches snapshot', () => {
    const { container } = render(<NotFoundSectionContent />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
