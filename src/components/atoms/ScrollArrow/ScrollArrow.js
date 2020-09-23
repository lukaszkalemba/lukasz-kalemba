import React from 'react';
import useWindowSize from 'hooks/useWindowSize';
import Icon from 'components/atoms/Icon';
import arrow from 'assets/svgs/icon_scrolldown-arrow.svg';
import S from './ScrollArrow.styles';

const ScrollArrow = () => {
  const size = useWindowSize();

  const handleClick = () => {
    window.smoothScroll.scrollTo(0, size.height + 80, 1000);
  };

  return (
    <S.Button onClick={handleClick}>
      <S.Info>Przesuń w dół</S.Info>
      <Icon src={arrow} />
    </S.Button>
  );
};

export default ScrollArrow;
