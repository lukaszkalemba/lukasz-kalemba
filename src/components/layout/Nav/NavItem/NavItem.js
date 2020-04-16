import React from 'react';
import PropTypes from 'prop-types';
import S from './NavItem.styles';

const NavItem = ({ path, name }) => {
  return (
    <S.ListItem>
      <S.Link to={path}>{name}</S.Link>
    </S.ListItem>
  );
};

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavItem;
