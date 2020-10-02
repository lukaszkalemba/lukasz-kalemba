import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import Link from './Link';

describe('<Link />', () => {
  it('renders with proper path and content', () => {
    const linkProps = {
      to: '/projects',
      children: 'projects',
    };

    const { getByRole } = render(<Link {...linkProps} />);

    const link = getByRole('link');

    expect(link).toHaveTextContent(linkProps.children);
    expect(link).toHaveAttribute('href', linkProps.to);
  });
});
