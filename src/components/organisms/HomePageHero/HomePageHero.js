import React from 'react';
import HeroContent from 'components/molecules/HeroContent';
import animations from './HomePageHero.animations';
import S from './HomePageHero.styles';

const HomePageHero = () => {
  return (
    <S.Wrapper {...animations.wrapper}>
      <HeroContent />
    </S.Wrapper>
  );
};

export default HomePageHero;
