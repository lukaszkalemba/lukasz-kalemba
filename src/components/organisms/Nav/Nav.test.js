import React from 'react';
import { render } from 'utils/test-utils';
import 'jest-styled-components';
import '__mocks__/intersectionObserver';
import Nav from './Nav';

const renderNav = props => {
  const utils = render(<Nav {...props} />);

  const logo = utils.getByTestId('logo');
  return { ...utils, logo };
};

describe('<Nav />', () => {
  it('has proper logo, button and links components inside', () => {
    const { getByRole } = renderNav({
      path: '/',
    });

    const menuButton = getByRole('button');

    expect(menuButton).toBeInTheDocument();
  });

  it('renders logo with proper styles if is home page', () => {
    const { logo } = renderNav({
      path: '/',
    });

    expect(logo).toHaveStyleRule('pointer-events', 'none');
  });

  it('renders logo with proper styles if is not home page', () => {
    const { logo } = renderNav({
      path: '/projects',
    });

    expect(logo).toHaveStyleRule('pointer-events', 'auto');
  });
});
