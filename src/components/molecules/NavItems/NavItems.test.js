import React from 'react';
import { render } from 'utils/test-utils';
import 'jest-styled-components';
import NavItems from './NavItems';

const renderNavItems = props => {
  const utils = render(<NavItems {...props} closeNav={jest.fn()} />);

  const navItemsWrapper = utils.getByTestId('nav-items-wrapper');
  return { ...utils, navItemsWrapper };
};

describe('<NavItems />', () => {
  it('renders properly with closed nav', () => {
    const { navItemsWrapper } = renderNavItems({ isNavOpen: false });

    expect(navItemsWrapper).toHaveStyleRule('transform', 'translateX(-150%)');
  });

  it('renders properly with opened nav', () => {
    const { navItemsWrapper } = renderNavItems({
      isNavOpen: true,
    });

    expect(navItemsWrapper).toHaveStyleRule('transform', 'translateX(0)');
  });
});
