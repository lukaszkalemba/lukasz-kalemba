import React from 'react';
import useWindowSize from 'hooks/useWindowSize';
import Container from 'components/particles/Container';
import Button from 'components/atoms/Button';
import animations from './HeroContent.animations';
import S from './HeroContent.styles';

const HeroContent = () => {
  const size = useWindowSize();

  const buttonsAnimation = animations.getButtons(size);
  return (
    <Container axis="both">
      <S.Content>
        <S.Heading tag="h1" homePage animation={animations.heading}>
          Zaistniej w sieci
        </S.Heading>
        <S.Paragraph animation={animations.paragraph}>
          Zaistniej w świecie nieograniczonych możliwości
        </S.Paragraph>
      </S.Content>

      <S.Buttons {...buttonsAnimation}>
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
