import React from 'react';
import jump from 'jump.js';
import Icon from 'components/atoms/Icon';
import arrow from 'assets/svgs/icon_scrolldown-arrow.svg';
import S from './ScrollArrow.styles';

const ScrollArrow = () => {
  const handleClick = () => {
    jump(window.innerHeight + 50);
  };

  return (
    <S.Button onClick={handleClick}>
      <S.Info>Przesuń w dół</S.Info>
      <Icon src={arrow} />
    </S.Button>
  );
};

export default ScrollArrow;
