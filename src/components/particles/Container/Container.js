import React from 'react';
import PropTypes from 'prop-types';
import S from './Container.styles';

const Container = ({ axis, doubling, children }) => {
  return (
    <S.Wrapper axis={axis} doubling={doubling}>
      {children}
    </S.Wrapper>
  );
};

Container.defaultProps = {
  doubling: null,
};

Container.propTypes = {
  axis: PropTypes.oneOf(['x', 'y', 'both']).isRequired,
  doubling: PropTypes.oneOf(['x', 'y', 'both']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
