import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import Logo from 'components/commons/Logo';
import Container from 'components/commons/Container';
import NavItems from 'components/layout/Nav/NavItems';
import Hamburger from 'components/layout/Nav/Hamburger';
import S from './Nav.styles';

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const nav = document.getElementById('gsap-nav-header');

    const mq = window.matchMedia('(min-width: 1150px)');

    if (mq.matches) {
      gsap.fromTo(
        nav,
        { y: '-=200', autoAlpha: 0 },
        {
          duration: 0.75,
          delay: 1,
          y: '+=200',
          autoAlpha: 1,
          clearProps: 'all',
        }
      );
    }
  }, []);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header id="gsap-nav-header">
      <Container axis="both">
        <S.Wrapper>
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
