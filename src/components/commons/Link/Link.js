import React from 'react';
import PropTypes from 'prop-types';
import S from './Link.styles';

const Link = ({ to, children }) => {
  return <S.Link to={to}>{children}</S.Link>;
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Link;
