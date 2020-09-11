import React from 'react';
import { render } from 'utils/test-utils';
import 'jest-styled-components';
import NavItems from './NavItems';

describe('<NavItems />', () => {
  it('renders correctly with closed nav', () => {
    const { getByTestId } = render(
      <NavItems isNavOpen={false} closeNav={jest.fn()} />
    );

    const navItemsList = getByTestId('nav-items-list');

    expect(navItemsList).toHaveStyleRule('transform', 'translateX(-100%)');
  });

  it('renders correctly with opened nav', () => {
    const { getByTestId } = render(<NavItems isNavOpen closeNav={jest.fn()} />);

    const navItemsList = getByTestId('nav-items-list');

    expect(navItemsList).toHaveStyleRule('transform', 'translateX(0)');
  });
});
