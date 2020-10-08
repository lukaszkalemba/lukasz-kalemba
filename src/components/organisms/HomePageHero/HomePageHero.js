import React, { useEffect } from 'react';
import HeroContent from 'components/molecules/HeroContent';
import TriangleDecorator from 'components/atoms/TriangleDecorator';
import { setHeightOnMobile } from 'helpers/setHeightOnMobile';
import animations from './HomePageHero.animations';
import S from './HomePageHero.styles';

const HomePageHero = () => {
  useEffect(() => {
    setHeightOnMobile();
  }, []);

  return (
    <S.Wrapper {...animations.wrapper}>
      <HeroContent />
      <TriangleDecorator />
    </S.Wrapper>
  );
};

export default HomePageHero;
