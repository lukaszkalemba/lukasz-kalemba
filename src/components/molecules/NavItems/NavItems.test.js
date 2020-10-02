import React from 'react';
import { render } from 'utils/test-utils';
import 'jest-styled-components';
import NavItems from './NavItems';

const renderNavItems = props => {
  const utils = render(<NavItems {...props} closeNav={jest.fn()} />);

  const navItemsList = utils.getByTestId('nav-items-list');
  return { ...utils, navItemsList };
};

describe('<NavItems />', () => {
  it('renders properly with closed nav', () => {
    const { navItemsList } = renderNavItems({ isNavOpen: false });

    expect(navItemsList).toHaveStyleRule('transform', 'translateX(-150%)');
  });

  it('renders properly with opened nav', () => {
    const { navItemsList } = renderNavItems({
      isNavOpen: true,
    });

    expect(navItemsList).toHaveStyleRule('transform', 'translateX(0)');
  });
});
