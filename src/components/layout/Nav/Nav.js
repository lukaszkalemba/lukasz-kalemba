import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from 'components/common/Logo';
import Container from 'components/common/Container';
import NavItems from 'components/layout/Nav/NavItems';
import Hamburger from 'components/layout/Nav/Hamburger';
import animations from './Nav.animations';
import S from './Nav.styles';

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const mq = window.matchMedia('(min-width: 1150px)');
  let navHeaderVariants;

  if (mq.matches) {
    navHeaderVariants = animations.navHeaderVariants;
  }

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <motion.header
      variants={navHeaderVariants}
      initial="initial"
      animate="animate"
    >
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
    </motion.header>
  );
};

export default Nav;
