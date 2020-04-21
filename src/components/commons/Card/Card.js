import React from 'react';
import PropTypes from 'prop-types';
import S from './Card.styles';

const Card = ({ title }) => {
  return (
    <S.Article>
      <S.Overlay />
      <S.Title>{title}</S.Title>
    </S.Article>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;
