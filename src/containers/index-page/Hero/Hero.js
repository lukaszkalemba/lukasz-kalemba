import React from 'react';
import useWindowSize from 'hooks/useWindowSize';
import Container from 'components/common/Container';
import Paragraph from 'components/index-page/HeroParagraph';
import Button from 'components/common/Button';
import animations from './Hero.animations';
import S from './Hero.styles';

const Hero = () => {
  const size = useWindowSize();

  return (
    <S.Wrapper
      variants={animations.wrapperVariants}
      initial="initial"
      animate="animate"
    >
      <Container axis="both">
        <S.Content>
          <S.Heading tag="h1" variants={animations.headingVariants}>
            Zaistniej w sieci
          </S.Heading>
          <Paragraph variants={animations.paragraphVariants}>
            Zaistniej w świecie nieograniczonych możliwości
          </Paragraph>
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
    </S.Wrapper>
  );
};

export default Hero;
