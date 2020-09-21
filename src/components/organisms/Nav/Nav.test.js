import React from 'react';
import { render } from 'utils/test-utils';
import 'jest-styled-components';
import Nav from './Nav';

describe('<Nav />', () => {
  it('renders correctly with home page', () => {
    const fakeProps = {
      path: '/',
      isHomePage: true,
    };

    const { getByTestId, getByRole } = render(<Nav {...fakeProps} />);

    const logoWrapper = getByTestId('logo-wrapper');
    const projectsLink = getByRole('link', { name: /projekty/i });
    const blogLink = getByRole('link', { name: /blog/i });
    const pricingLink = getByRole('link', { name: /wycena/i });
    const menuButton = getByRole('button');

    expect(logoWrapper).toHaveStyleRule('pointer-events', 'none');

    expect(projectsLink).toHaveAttribute('href', '/projekty');
    expect(blogLink).toHaveAttribute('href', '/blog');
    expect(pricingLink).toHaveAttribute('href', '/wycena');

    expect(menuButton).toBeInTheDocument();
  });

  it('renders correctly with not home page', () => {
    const fakeProps = {
      path: '/fake-path',
      isHomePage: false,
    };

    const { getByTestId } = render(<Nav {...fakeProps} />);

    const logoWrapper = getByTestId('logo-wrapper');

    expect(logoWrapper).not.toHaveStyleRule('pointer-events', 'none');
  });
});
