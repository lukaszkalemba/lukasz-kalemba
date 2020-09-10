import React from 'react';
import { render } from 'utils/test-utils';
import user from '@testing-library/user-event';
import 'jest-styled-components';
import Logo from './Logo';

describe('<Logo />', () => {
  it('renders correctly with proper styles', () => {
    const setIsNavOpen = jest.fn();

    const { getByTestId } = render(
      <Logo path="/" setIsNavOpen={setIsNavOpen} />
    );

    const logoWrapper = getByTestId('logo-wrapper');

    expect(logoWrapper).toHaveStyleRule('pointer-events', 'none');

    user.click(logoWrapper);
    expect(setIsNavOpen).toHaveBeenCalledTimes(1);
  });
});
