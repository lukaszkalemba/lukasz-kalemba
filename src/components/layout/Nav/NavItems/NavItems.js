import React from 'react';
import links from 'utils/links';
import Container from 'components/commons/Container';
import NavItem from 'components/layout/Nav/NavItem';
import S from './NavItems.styles';

const NavItems = () => {
  return (
    <S.List>
      <Container axis="both">
        {links.map(({ id, path, name }) => (
          <NavItem key={id} path={path} name={name} />
        ))}
      </Container>
    </S.List>
  );
};

export default NavItems;
