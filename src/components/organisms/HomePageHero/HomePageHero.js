import React from 'react';
import HeroContent from 'components/molecules/HeroContent';
import ScrollArrow from 'components/atoms/ScrollArrow';
import animations from './HomePageHero.animations';
import S from './HomePageHero.styles';

const HomePageHero = () => {
  return (
    <S.Wrapper
      variants={animations.wrapperVariants}
      initial="initial"
      animate="animate"
    >
      <HeroContent />

      <S.ScrollWrapper
        variants={animations.scrollWrapperVariants}
        initial="initial"
        animate="animate"
      >
        <ScrollArrow />
      </S.ScrollWrapper>
    </S.Wrapper>
  );
};

export default HomePageHero;
