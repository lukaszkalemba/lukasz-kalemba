import React from 'react';
import Icon from 'components/common/Icon';
import arrow from 'assets/svgs/icon_scrolldown-arrow.svg';
import S from './ScrollArrow.styles';

const ScrollArrow = () => {
  return (
    <S.Wrapper>
      <Icon src={arrow} />
    </S.Wrapper>
  );
};

export default ScrollArrow;
