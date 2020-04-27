import React, { useState, useEffect } from 'react';
import Logo from 'components/commons/Logo';
import Container from 'components/commons/Container';
import NavItems from 'components/layout/Nav/NavItems';
import Hamburger from 'components/layout/Nav/Hamburger';
import S from './Nav.styles';

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleScrolling = () => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  useEffect(() => {
    toggleScrolling();
  }, [isNavOpen]);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header>
      <Container axis="both">
        <S.Wrapper
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            transition: 0.5,
            delay: 1.25,
          }}
        >
          <S.TopBar>
            <Logo setIsNavOpen={setIsNavOpen} />
            <Hamburger isNavOpen={isNavOpen} toggleNav={toggleNav} />
          </S.TopBar>
          <nav>
            <NavItems isNavOpen={isNavOpen} />
          </nav>
        </S.Wrapper>
      </Container>
    </header>
  );
};

export default Nav;
