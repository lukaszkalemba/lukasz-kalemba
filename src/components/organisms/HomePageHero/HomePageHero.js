import React from 'react';
import HeroContent from 'components/molecules/HeroContent';
import ScrollArrow from 'components/atoms/ScrollArrow';
import animations from './HomePageHero.animations';
import S from './HomePageHero.styles';

const HomePageHero = () => {
  return (
    <S.Wrapper {...animations.wrapper}>
      <HeroContent />

      <S.ScrollWrapper {...animations.scrollWrapper}>
        <ScrollArrow />
      </S.ScrollWrapper>
    </S.Wrapper>
  );
};

export default HomePageHero;
