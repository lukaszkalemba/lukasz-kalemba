import React from 'react';
import PropTypes from 'prop-types';
import S from './TriangleDecorator.styles';

const TriangleDecorator = ({ animation }) => {
  return <S.TriangleDecorator {...animation} />;
};

TriangleDecorator.defaultProps = {
  animation: null,
};

TriangleDecorator.propTypes = {
  animation: PropTypes.shape({
    variants: PropTypes.shape({
      animate: PropTypes.shape({}),
      initial: PropTypes.shape({}),
    }),
  }),
};

export default TriangleDecorator;
