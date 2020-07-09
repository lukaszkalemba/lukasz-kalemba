import React from 'react';
import HeroContent from 'components/molecules/HeroContent';
import ScrollArrow from 'components/atoms/ScrollArrow';
import animations from './Hero.animations';
import S from './Hero.styles';

const Hero = () => {
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

export default Hero;
