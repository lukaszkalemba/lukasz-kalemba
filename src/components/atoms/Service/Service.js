import React from 'react';
import PropTypes from 'prop-types';
import S from './Service.styles';

const Service = ({ img, variants, children }) => {
  return (
    <S.Article>
      <S.Overlay fluid={img.fluid} />
      <S.Title variants={variants} data-testid="service-title">
        {children}
      </S.Title>
    </S.Article>
  );
};

Service.propTypes = {
  img: PropTypes.shape({
    fluid: PropTypes.object,
  }).isRequired,
  variants: PropTypes.shape({
    initial: PropTypes.object,
    animate: PropTypes.object,
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Service;
