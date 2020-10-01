import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useWindowSize from 'hooks/useWindowSize';
import Logo from 'components/atoms/Logo';
import NavItems from 'components/molecules/NavItems';
import Hamburger from 'components/atoms/Hamburger';
import Container from 'components/particles/Container';
import animations from './Nav.animations';
import S from './Nav.styles';

const Nav = ({ path, isHomePage }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const size = useWindowSize();

  const isMobile = size.width < 1150;

  const toggleNav = () => {
    setIsNavOpen(state => !state);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const headerAnimations = animations.getHeader(isHomePage, isMobile);

  return (
    <S.Header {...headerAnimations}>
      <Container axis="both">
        <S.Nav>
          <S.TopBar>
            <Logo path={path} setIsNavOpen={setIsNavOpen} />
            <Hamburger isNavOpen={isNavOpen} toggleNav={toggleNav} />
          </S.TopBar>
          <NavItems isNavOpen={isNavOpen} closeNav={closeNav} />
        </S.Nav>
      </Container>
    </S.Header>
  );
};

Nav.propTypes = {
  path: PropTypes.string.isRequired,
  isHomePage: PropTypes.bool.isRequired,
};

export default Nav;
