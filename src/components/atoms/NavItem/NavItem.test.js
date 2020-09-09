import React from 'react';
import { render } from 'utils/test-utils';
import user from '@testing-library/user-event';
import NavItem from './NavItem';

describe('<NavItem />', () => {
  it('renders correctly', () => {
    const fakePath = '/test';
    const fakeName = 'test name';
    const closeNav = jest.fn();

    const { getByTestId } = render(
      <NavItem path={fakePath} name={fakeName} closeNav={closeNav} />
    );

    const navItemLink = getByTestId('nav-item-link');

    user.click(navItemLink);

    expect(closeNav).toHaveBeenCalledTimes(1);
    expect(navItemLink).toHaveTextContent(fakeName);
    expect(navItemLink).toHaveAttribute('href', fakePath);
  });
});
