import React from 'react';
import PropTypes from 'prop-types';
import S from './Service.styles';

const Service = ({ img, children }) => {
  return (
    <S.Article>
      <S.Overlay fluid={img.fluid} />
      <S.Title>{children}</S.Title>
    </S.Article>
  );
};

Service.propTypes = {
  img: PropTypes.shape({
    fluid: PropTypes.shape({}).isRequired,
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Service;
