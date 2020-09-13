import React from 'react';
import PropTypes from 'prop-types';
import S from './NavItem.styles';

const NavItem = ({ path, name, closeNav }) => {
  return (
    <S.ListItem>
      <S.Link onClick={closeNav} to={path}>
        {name}
      </S.Link>
    </S.ListItem>
  );
};

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  closeNav: PropTypes.func.isRequired,
};

export default NavItem;
