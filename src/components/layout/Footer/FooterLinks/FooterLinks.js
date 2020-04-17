import React from 'react';
import { Link } from 'gatsby';
import links from 'utils/links';

const FooterLinks = () => (
  <div>
    {links.map(({ id, path, name }) => (
      <Link key={id} to={path}>
        {name}
      </Link>
    ))}
  </div>
);

export default FooterLinks;
