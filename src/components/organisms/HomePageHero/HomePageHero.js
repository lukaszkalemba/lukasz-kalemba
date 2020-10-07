import React, { useEffect } from 'react';
import HeroContent from 'components/molecules/HeroContent';
import useWindowSize from 'hooks/useWindowSize';
import { setHeightOnMobile } from 'helpers/setHeightOnMobile';
import animations from './HomePageHero.animations';
import S from './HomePageHero.styles';

const HomePageHero = () => {
  const size = useWindowSize();

  useEffect(() => {
    setHeightOnMobile();
  }, []);

  const isMobile = size.width < 1150;

  const triangleAnimations = animations.getTriangle(isMobile);
  return (
    <S.Wrapper {...animations.wrapper}>
      <HeroContent />
      <S.TriangleDecorator {...triangleAnimations} />
    </S.Wrapper>
  );
};

export default HomePageHero;
