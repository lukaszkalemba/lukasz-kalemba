import React from 'react';
import PropTypes from 'prop-types';
import links from 'utils/links';
import NavItem from 'components/atoms/NavItem';
import S from './NavItems.styles';

const NavItems = ({ isNavOpen }) => {
  return (
    <S.List isNavOpen={isNavOpen}>
      {links.map(({ id, path, name }) => (
        <NavItem key={id} path={path} name={name} />
      ))}
    </S.List>
  );
};

NavItems.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
};

export default NavItems;
