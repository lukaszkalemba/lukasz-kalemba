import React from 'react';
import PropTypes from 'prop-types';
import S from './Container.styles';

const Container = ({ axis, children }) => {
  return <S.Wrapper axis={axis}>{children}</S.Wrapper>;
};

Container.propTypes = {
  axis: PropTypes.oneOf(['x', 'y', 'both']).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
