import React from 'react';
import PropTypes from 'prop-types';
import S from './Scrollbar.styles';

const Scrollbar = ({ children }) => {
  return <S.Scrollbar damping={0.075}>{children}</S.Scrollbar>;
};

Scrollbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Scrollbar;
