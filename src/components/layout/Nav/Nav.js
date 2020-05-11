import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Logo from 'components/common/Logo';
import Container from 'components/common/Container';
import NavItems from 'components/layout/Nav/NavItems';
import Hamburger from 'components/layout/Nav/Hamburger';
import animations from './Nav.animations';
import S from './Nav.styles';

const Nav = ({ isHomePage }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const mq = window.matchMedia('(min-width: 1150px)');
  let headerVariants;

  if (mq.matches) {
    headerVariants = animations.getHeaderVariants(isHomePage);
  }

  return (
    <motion.header
      variants={headerVariants}
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

Nav.propTypes = {
  isHomePage: PropTypes.bool.isRequired,
};

export default Nav;
