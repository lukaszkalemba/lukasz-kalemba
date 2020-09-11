import React from 'react';
import PropTypes from 'prop-types';
import links from 'utils/links';
import NavItem from 'components/atoms/NavItem';
import S from './NavItems.styles';

const NavItems = ({ isNavOpen, closeNav }) => {
  return (
    <S.List isNavOpen={isNavOpen} data-testid="nav-items-list">
      {links.map(({ id, path, name }) => (
        <NavItem key={id} path={path} name={name} closeNav={closeNav} />
      ))}
    </S.List>
  );
};

NavItems.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  closeNav: PropTypes.func.isRequired,
};

export default NavItems;
