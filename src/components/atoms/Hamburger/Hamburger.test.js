import React from 'react';
import { render } from 'utils/test-utils';
import user from '@testing-library/user-event';
import 'jest-styled-components';
import Hamburger from './Hamburger';

describe('<Hamburger />', () => {
  it('executes toggling nav function on click', () => {
    const toggleNav = jest.fn();

    const { getByRole } = render(
      <Hamburger isNavOpen={false} toggleNav={toggleNav} />
    );

    user.click(getByRole('button'));

    expect(toggleNav).toHaveBeenCalledTimes(1);
  });
});
