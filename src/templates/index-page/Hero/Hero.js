import React from 'react';
import Container from 'components/commons/Container';
import Paragraph from 'components/index-page/HeroParagraph';
import Button from 'components/commons/Button';
import S from './Hero.styles';

const Hero = () => {
  return (
    <S.Wrapper>
      <Container axis="both">
        <S.Content>
          <S.Heading
            tag="h1"
            initial={{
              x: -150,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            Zaistniej w sieci
          </S.Heading>
          <Paragraph>Zaistniej w świecie nieograniczonych możliwości</Paragraph>
        </S.Content>
        <S.Buttons
          initial={{
            x: -150,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.8,
          }}
        >
          <Button priority="primary">Bezpłatna wycena</Button>
          <Button priority="secondary">Zrealizowane projekty</Button>
        </S.Buttons>
      </Container>
    </S.Wrapper>
  );
};

export default Hero;
