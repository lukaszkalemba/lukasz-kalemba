import React from 'react';
import { render } from 'utils/test-utils';
import user from '@testing-library/user-event';
import NavItem from './NavItem';

const renderNavItem = props => {
  const utils = render(<NavItem {...props} />);

  const navItemLink = utils.getByRole('link');
  return { ...utils, navItemLink };
};

describe('<NavItem />', () => {
  it('renders with proper props', () => {
    const navItemProps = {
      path: '/projects',
      name: 'projects',
      closeNav: jest.fn(),
    };

    const { navItemLink } = renderNavItem(navItemProps);

    expect(navItemLink).toHaveTextContent(navItemProps.name);
    expect(navItemLink).toHaveAttribute('href', navItemProps.path);
  });

  it('fires closing nav function on click', () => {
    const navItemProps = {
      path: '/projects',
      name: 'projects',
      closeNav: jest.fn(),
    };

    const { navItemLink } = renderNavItem(navItemProps);

    user.click(navItemLink);
    expect(navItemProps.closeNav).toHaveBeenCalledTimes(1);
  });
});
