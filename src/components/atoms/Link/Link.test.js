import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import Link from './Link';

describe('<Link />', () => {
  it('renders correctly with given path and content', () => {
    const fakeContent = 'content';
    const fakePath = '/fake-path';

    const { getByRole } = render(<Link to={fakePath}>{fakeContent}</Link>);

    const link = getByRole('link');

    expect(link).toHaveTextContent(fakeContent);
    expect(link).toHaveAttribute('href', fakePath);
  });
});
