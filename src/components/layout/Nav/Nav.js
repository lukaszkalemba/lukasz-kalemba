import React from 'react';
import Logo from 'components/commons/Logo';
import NavItems from 'components/layout/Nav/NavItems';

const Nav = () => {
  return (
    <header>
      <Logo />
      <nav>
        <NavItems />
      </nav>
    </header>
  );
};

export default Nav;
