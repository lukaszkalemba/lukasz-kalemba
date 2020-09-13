import React from 'react';
import { render } from 'utils/test-utils';
import user from '@testing-library/user-event';
import NavItem from './NavItem';

describe('<NavItem />', () => {
  it('renders correctly with given props', () => {
    const fakeProps = {
      path: '/test',
      name: 'test name',
      closeNav: jest.fn(),
    };

    const { getByRole } = render(<NavItem {...fakeProps} />);

    const navItemLink = getByRole('link');

    user.click(navItemLink);

    expect(fakeProps.closeNav).toHaveBeenCalledTimes(1);
    expect(navItemLink).toHaveTextContent(fakeProps.name);
    expect(navItemLink).toHaveAttribute('href', fakeProps.path);
  });
});
