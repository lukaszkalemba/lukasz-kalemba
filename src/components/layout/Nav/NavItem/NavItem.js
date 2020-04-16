import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const NavItem = ({ path, name }) => {
  return (
    <li>
      <Link to={path}>{name}</Link>
    </li>
  );
};

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavItem;
