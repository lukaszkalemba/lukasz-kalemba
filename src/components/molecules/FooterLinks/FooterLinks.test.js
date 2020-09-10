import React from 'react';
import { render } from 'utils/test-utils';
import FooterLinks from './FooterLinks';

describe('<FooterLinks />', () => {
  it('renders correctly and matches snapshot', () => {
    const { container } = render(<FooterLinks />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
