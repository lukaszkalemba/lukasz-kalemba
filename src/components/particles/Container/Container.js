import React from 'react';
import PropTypes from 'prop-types';
import S from './Container.styles';

const Container = ({ axis, doubling, className, children }) => {
  return (
    <S.Wrapper axis={axis} doubling={doubling} className={className}>
      {children}
    </S.Wrapper>
  );
};

Container.defaultProps = {
  doubling: null,
  className: '',
};

Container.propTypes = {
  axis: PropTypes.oneOf(['x', 'y', 'both']).isRequired,
  doubling: PropTypes.oneOf(['x', 'y', 'both']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
