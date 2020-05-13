import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import useWindowSize from 'hooks/useWindowSize';
import Logo from 'components/common/Logo';
import Container from 'components/common/Container';
import NavItems from 'components/layout/Nav/NavItems';
import Hamburger from 'components/layout/Nav/Hamburger';
import animations from './Nav.animations';
import S from './Nav.styles';

const Nav = ({ path, isHomePage }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const size = useWindowSize();

  let headerVariants;

  if (size.width > 1150) {
    headerVariants = animations.getHeaderVariants(isHomePage);
  }

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <Container axis="both">
        <S.Wrapper>
          <S.TopBar>
            <Logo path={path} setIsNavOpen={setIsNavOpen} />
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
  path: PropTypes.string.isRequired,
  isHomePage: PropTypes.bool.isRequired,
};

export default Nav;
