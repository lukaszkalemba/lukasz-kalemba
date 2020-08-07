import React from 'react';
import useWindowSize from 'hooks/useWindowSize';
import Container from 'components/particles/Container';
import Button from 'components/atoms/Button';
import animations from './HeroContent.animations';
import S from './HeroContent.styles';

const HeroContent = () => {
  const size = useWindowSize();

  return (
    <Container axis="both">
      <S.Content>
        <S.Heading tag="h1" variants={animations.headingVariants}>
          Zaistniej w sieci
        </S.Heading>
        <S.Paragraph variants={animations.paragraphVariants}>
          Zaistniej w świecie nieograniczonych możliwości
        </S.Paragraph>
      </S.Content>

      <S.Buttons variants={animations.getButtonsVariants(size)}>
        <Button path="/wycena" priority="primary">
          Bezpłatna wycena
        </Button>
        <Button path="/projekty" priority="secondary">
          Zrealizowane projekty
        </Button>
      </S.Buttons>
    </Container>
  );
};

export default HeroContent;
