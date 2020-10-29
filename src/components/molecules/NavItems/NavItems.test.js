import React from 'react';
import { render } from 'utils/test-utils';
import 'jest-styled-components';
import '__mocks__/intersectionObserver';
import NavItems from './NavItems';

const renderNavItems = props => {
  const utils = render(<NavItems {...props} closeNav={jest.fn()} />);

  const navItemsWrapper = utils.getByTestId('nav-items-wrapper');
  return { ...utils, navItemsWrapper };
};

describe('<NavItems />', () => {
  it('renders properly with closed nav', () => {
    const { navItemsWrapper } = renderNavItems({ isNavOpen: false });

    expect(navItemsWrapper).toHaveStyleRule(
      'clip-path',
      'circle( 0 at calc(100% - 40px) 40px )'
    );
  });

  it('renders properly with opened nav', () => {
    const { navItemsWrapper } = renderNavItems({
      isNavOpen: true,
    });

    expect(navItemsWrapper).toHaveStyleRule('clip-path', 'circle( 100% )');
  });
});
