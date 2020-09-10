import React from 'react';
import { render } from 'utils/test-utils';
import FooterLogo from './FooterLogo';

describe('<FooterLogo />', () => {
  it('renders correctly and matches snapshot', () => {
    const { container } = render(<FooterLogo />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
