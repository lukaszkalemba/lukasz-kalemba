import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import Footer from './Footer';

describe('<Footer />', () => {
  it('has proper links, logo and copyright components inside', () => {
    const { getByRole, getByText, getByTestId } = render(<Footer isFooter />);

    const emailLink = getByRole('link', { name: /@/i });
    const phoneLink = getByRole('link', { name: /\+48/i });
    const projectsLink = getByRole('link', { name: /projekty/i });
    const blogLink = getByRole('link', { name: /blog/i });
    const pricingLink = getByRole('link', { name: /wycena/i });
    const footerLogo = getByTestId('footer-logo');
    const copyright = getByText(/wszelkie prawa zastrzeżone/i);

    expect(emailLink).toBeInTheDocument();
    expect(phoneLink).toBeInTheDocument();

    expect(projectsLink).toHaveAttribute('href', '/projekty');
    expect(blogLink).toHaveAttribute('href', '/blog');
    expect(pricingLink).toHaveAttribute('href', '/wycena');

    expect(footerLogo).toBeInTheDocument();
    expect(copyright).toBeInTheDocument();
  });
});
