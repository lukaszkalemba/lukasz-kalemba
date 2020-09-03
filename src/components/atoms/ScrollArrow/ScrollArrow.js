import React from 'react';
import useWindowSize from 'hooks/useWindowSize';
import Icon from 'components/atoms/Icon';
import arrow from 'assets/svgs/icon_scrolldown-arrow.svg';
import S from './ScrollArrow.styles';

const ScrollArrow = () => {
  const size = useWindowSize();

  const handleClick = () => {
    window.smoothScroll.scrollTo(0, size.height + size.height / 10, 1000);
  };

  return (
    <S.Wrapper onClick={handleClick}>
      <S.Info>Przesuń w dół</S.Info>
      <Icon src={arrow} />
    </S.Wrapper>
  );
};

export default ScrollArrow;
