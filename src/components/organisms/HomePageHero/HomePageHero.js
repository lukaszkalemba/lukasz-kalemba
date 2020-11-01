import React, { useEffect } from 'react';
import useWindowSize from 'hooks/useWindowSize';
import HeroContent from 'components/molecules/HeroContent';
import TriangleDecorator from 'components/atoms/TriangleDecorator';
import { setHeightOnMobile } from 'helpers/setHeightOnMobile';
import animations from './HomePageHero.animations';
import S from './HomePageHero.styles';

const HomePageHero = () => {
  const size = useWindowSize();

  useEffect(() => {
    setHeightOnMobile();
  }, []);

  const isMobile = size.width < 1150;

  const triangleAnimation = animations.getTriangle(isMobile);

  return (
    <S.Wrapper {...animations.wrapper}>
      <HeroContent />
      <TriangleDecorator animation={triangleAnimation} />
    </S.Wrapper>
  );
};

export default HomePageHero;
