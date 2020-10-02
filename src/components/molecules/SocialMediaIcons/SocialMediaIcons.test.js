import React from 'react';
import { render } from 'utils/test-utils';
import SocialMediaIcons from './SocialMediaIcons';

const renderSocialMediaIcons = props => {
  const utils = render(<SocialMediaIcons {...props} />);

  return { ...utils };
};

describe('<SocialMediaIcons />', () => {
  it('has proper link elements length', () => {
    const { getAllByRole } = renderSocialMediaIcons();

    expect(getAllByRole('link')).toHaveLength(4);
  });

  it('matches snapshot', () => {
    const { container } = renderSocialMediaIcons();

    expect(container.firstChild).toMatchSnapshot();
  });
});
