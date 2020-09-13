import React from 'react';
import { render } from 'utils/test-utils';
import SocialMediaIcons from './SocialMediaIcons';

describe('<SocialMediaIcons />', () => {
  it('renders correctly and matches snapshot', () => {
    const { container, getAllByRole } = render(<SocialMediaIcons />);

    const links = getAllByRole('link');

    expect(links).toHaveLength(4);

    expect(container.firstChild).toMatchSnapshot();
  });
});
