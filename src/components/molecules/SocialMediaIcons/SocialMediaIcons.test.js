import React from 'react';
import { render } from 'utils/test-utils';
import SocialMediaIcons from './SocialMediaIcons';

describe('<SocialMediaIcons />', () => {
  it('renders correctly and matches snapshot', () => {
    const { container } = render(<SocialMediaIcons />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
