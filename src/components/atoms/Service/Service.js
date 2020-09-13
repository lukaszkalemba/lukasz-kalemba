import React from 'react';
import PropTypes from 'prop-types';
import S from './Service.styles';

const Service = ({ img, animation, children }) => {
  return (
    <S.Article>
      <S.Overlay fluid={img.fluid} />
      <S.Title {...animation}>{children}</S.Title>
    </S.Article>
  );
};

Service.propTypes = {
  img: PropTypes.shape({
    fluid: PropTypes.shape({}),
  }).isRequired,
  animation: PropTypes.shape({
    variants: PropTypes.shape({
      initial: PropTypes.shape({}),
      animate: PropTypes.shape({}),
    }),
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Service;
