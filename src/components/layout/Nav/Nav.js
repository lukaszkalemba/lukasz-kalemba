import React from 'react';
import Logo from 'components/commons/Logo';
import Container from 'components/commons/Container';
import NavItems from 'components/layout/Nav/NavItems';
import Hamburger from 'components/layout/Nav/Hamburger';
import S from './Nav.styles';

const Nav = () => {
  return (
    <header>
      <Container axis="both">
        <S.TopBar>
          <Logo />
          <Hamburger />
        </S.TopBar>
        <nav>
          <NavItems />
        </nav>
      </Container>
    </header>
  );
};

export default Nav;
