import React from 'react';
import PropTypes from 'prop-types';
import links from 'utils/links';
import NavItem from 'components/atoms/NavItem';
import S from './NavItems.styles';

const NavItems = ({ isNavOpen, closeNav }) => {
  return (
    <S.Wrapper isNavOpen={isNavOpen} data-testid="nav-items-wrapper">
      <S.List>
        {links.map(({ id, path, name }) => (
          <NavItem key={id} path={path} name={name} closeNav={closeNav} />
        ))}
      </S.List>

      <S.Container axis="both">
        <S.SocialMediaIcons />
      </S.Container>
    </S.Wrapper>
  );
};

NavItems.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  closeNav: PropTypes.func.isRequired,
};

export default NavItems;
