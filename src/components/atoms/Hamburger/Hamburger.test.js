import React from 'react';
import { render } from 'utils/test-utils';
import user from '@testing-library/user-event';
import 'jest-styled-components';
import Hamburger from './Hamburger';

const fakeToggleNav = jest.fn();

describe('<Hamburger />', () => {
  it('executes toggling nav function on click', () => {
    const { getByRole } = render(
      <Hamburger isNavOpen={false} toggleNav={fakeToggleNav} />
    );

    const button = getByRole('button');

    user.click(button);

    expect(fakeToggleNav).toHaveBeenCalledTimes(1);
  });
});
