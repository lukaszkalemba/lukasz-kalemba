import React from 'react';
import Logo from 'components/commons/Logo';
import Container from 'components/commons/Container';
import NavItems from 'components/layout/Nav/NavItems';

const Nav = () => {
  return (
    <header>
      <Container axis="both">
        <Logo />
        <nav>
          <NavItems />
        </nav>
      </Container>
    </header>
  );
};

export default Nav;
