import React from 'react';
import { render } from 'utils/test-utils';
import userEvent from '@testing-library/user-event';
import NavItem from './NavItem';

const closeNav = jest.fn();

describe('<NavItem />', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <NavItem path="/test" name="test item" closeNav={closeNav} />
    );

    const navItemLink = getByTestId('nav-item-link');

    userEvent.click(navItemLink);

    expect(closeNav).toHaveBeenCalledTimes(1);
    expect(navItemLink.textContent).toBe('test item');
    expect(navItemLink.getAttribute('href')).toBe('/test');
  });
});
