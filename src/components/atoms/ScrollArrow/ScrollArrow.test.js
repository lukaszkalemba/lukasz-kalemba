import React from 'react';
import { render } from 'utils/test-utils';
import ScrollArrow from './ScrollArrow';

describe('<ScrollArrow />', () => {
  it('renders correctly and matches snapshot', () => {
    const { container } = render(<ScrollArrow />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
