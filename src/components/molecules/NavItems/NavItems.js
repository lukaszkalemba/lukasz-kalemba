import React from 'react';
import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import links from 'utils/links';
import NavItem from 'components/atoms/NavItem';
import S from './NavItems.styles';
import animations from './NavItems.animations';

const NavItems = ({ isNavOpen, isMobile, closeNav }) => {
  const isListVisible = isNavOpen || !isMobile;

  const listAnimation = animations.getList(isMobile);
  return (
    <S.Wrapper isNavOpen={isNavOpen} data-testid="nav-items-wrapper">
      <AnimatePresence>
        {isListVisible && (
          <S.List {...listAnimation}>
            {links.map(({ id, path, name }) => (
              <NavItem key={id} path={path} name={name} closeNav={closeNav} />
            ))}
          </S.List>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isNavOpen && (
          <S.Container axis="both" animation={animations.container}>
            <S.SocialMediaIcons />
          </S.Container>
        )}
      </AnimatePresence>
    </S.Wrapper>
  );
};

NavItems.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  closeNav: PropTypes.func.isRequired,
};

export default NavItems;
