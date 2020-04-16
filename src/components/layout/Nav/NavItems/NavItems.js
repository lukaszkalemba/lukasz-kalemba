import React from 'react';
import links from 'utils/links';
import NavItem from 'components/layout/Nav/NavItem';

const NavItems = () => {
  return (
    <ul>
      {links.map(({ id, path, name }) => (
        <NavItem key={id} path={path} name={name} />
      ))}
    </ul>
  );
};

export default NavItems;
