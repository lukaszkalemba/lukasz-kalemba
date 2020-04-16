import React from 'react';
import links from 'utils/links';
import NavItem from 'components/layout/Nav/NavItem';
import S from './NavItems.styles';

const NavItems = () => {
  return (
    <S.List>
      {links.map(({ id, path, name }) => (
        <NavItem key={id} path={path} name={name} />
      ))}
    </S.List>
  );
};

export default NavItems;
