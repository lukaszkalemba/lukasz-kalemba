import React from 'react';
import PropTypes from 'prop-types';
import S from './Service.styles';

const Service = ({ children }) => {
  return (
    <S.Article>
      <S.Title>{children}</S.Title>
    </S.Article>
  );
};

Service.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Service;
