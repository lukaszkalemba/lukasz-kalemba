import React from 'react';
import { render } from 'utils/test-utils';
import user from '@testing-library/user-event';
import 'jest-styled-components';
import Logo from './Logo';

const renderLogo = props => {
  const utils = render(<Logo {...props} />);

  const logo = utils.getByTestId('logo');
  return { ...utils, logo };
};

describe('<Logo />', () => {
  it('has proper styles if is home page', () => {
    const { logo } = renderLogo({
      path: '/',
      setIsNavOpen: jest.fn(),
    });

    expect(logo).toHaveStyleRule('pointer-events', 'none');
  });

  it('has proper styles if is not home page', () => {
    const { logo } = renderLogo({
      path: '/projects',
      setIsNavOpen: jest.fn(),
    });

    expect(logo).toHaveStyleRule('pointer-events', 'auto');
  });

  it('fires nav state function on click', () => {
    const logoProps = {
      path: '/',
      setIsNavOpen: jest.fn(),
    };

    const { logo } = renderLogo(logoProps);

    user.click(logo);
    expect(logoProps.setIsNavOpen).toHaveBeenCalledTimes(1);
  });
});
