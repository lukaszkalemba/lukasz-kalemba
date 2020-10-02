import React from 'react';
import { render } from 'utils/test-utils';
import links from 'utils/links';
import FooterLinks from './FooterLinks';

describe('<FooterLinks />', () => {
  it('has proper href attributes', () => {
    const { getAllByRole } = render(<FooterLinks />);

    const footerLinks = getAllByRole('link');

    for (let i = 0; i < links.length; i += 1) {
      expect(footerLinks[i]).toHaveTextContent(links[i].name);
      expect(footerLinks[i]).toHaveAttribute('href', links[i].path);
    }

    expect(footerLinks).toHaveLength(links.length);
  });
});
