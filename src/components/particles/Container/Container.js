import React from 'react';
import PropTypes from 'prop-types';
import S from './Container.styles';

const Container = ({ axis, doubling, animation, className, children }) => {
  return (
    <S.Wrapper
      axis={axis}
      doubling={doubling}
      className={className}
      {...animation}
    >
      {children}
    </S.Wrapper>
  );
};

Container.defaultProps = {
  doubling: null,
  animation: null,
  className: '',
};

Container.propTypes = {
  axis: PropTypes.oneOf(['x', 'y', 'both']).isRequired,
  doubling: PropTypes.oneOf(['x', 'y', 'both']),
  animation: PropTypes.shape({
    variants: PropTypes.shape({
      animate: PropTypes.shape({}),
      initial: PropTypes.shape({}),
    }),
  }),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
