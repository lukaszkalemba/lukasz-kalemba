import React from 'react';
import PropTypes from 'prop-types';
import S from './ServicesCTAHeading.styles';

const ServicesCTAHeading = ({ children, animations }) => {
  return (
    <S.Heading variants={animations.childrenVariants}>{children}</S.Heading>
  );
};

ServicesCTAHeading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  animations: PropTypes.shape({
    childrenVariants: PropTypes.shape({}),
  }).isRequired,
};

export default ServicesCTAHeading;
