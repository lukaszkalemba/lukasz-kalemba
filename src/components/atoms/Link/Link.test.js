import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import Link from './Link';

describe('<Link />', () => {
  it('renders correctly', () => {
    const fakeLinkContent = 'link content';
    const fakeLinkPath = '/fake-path';

    const { getByTestId } = render(
      <Link to={fakeLinkPath}>{fakeLinkContent}</Link>
    );

    const link = getByTestId('link');

    expect(link).toHaveTextContent(fakeLinkContent);
    expect(link).toHaveAttribute('href', fakeLinkPath);
  });
});
