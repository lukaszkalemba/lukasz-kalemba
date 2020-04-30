import React from 'react';
import PropTypes from 'prop-types';
import S from './Card.styles';

const Card = ({ index, title }) => {
  const isOffset = index % 2 !== 0 && true;

  return (
    <S.Article isOffset={isOffset}>
      <S.Overlay />
      <S.Title>{title}</S.Title>
    </S.Article>
  );
};

Card.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
