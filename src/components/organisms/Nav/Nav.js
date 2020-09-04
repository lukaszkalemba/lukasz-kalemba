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

  let headerVariants;

  if (size.width > 1150) {
    headerVariants = animations.getHeaderVariants(isHomePage);
  }

  const toggleScrolling = isOpen => {
    window.smoothScroll.updatePluginOptions('stopScrollbar', {
      open: isOpen,
    });
  };

  const toggleNav = () => {
    setIsNavOpen(state => !state);
    toggleScrolling(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
    toggleScrolling(false);
  };

  return (
    <S.Header variants={headerVariants} initial="initial" animate="animate">
      <Container axis="both">
        <S.Wrapper>
          <S.TopBar>
            <Logo path={path} setIsNavOpen={setIsNavOpen} />
            <Hamburger isNavOpen={isNavOpen} toggleNav={toggleNav} />
          </S.TopBar>
          <nav>
            <NavItems isNavOpen={isNavOpen} closeNav={closeNav} />
          </nav>
        </S.Wrapper>
      </Container>
    </S.Header>
  );
};

Nav.propTypes = {
  path: PropTypes.string.isRequired,
  isHomePage: PropTypes.bool.isRequired,
};

export default Nav;
