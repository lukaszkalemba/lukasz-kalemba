import React, { useEffect } from 'react';
import gsap from 'gsap';
import Container from 'components/commons/Container';
import Paragraph from 'components/index-page/HeroParagraph';
import Button from 'components/commons/Button';
import S from './Hero.styles';

const Hero = () => {
  useEffect(() => {
    const heading = document.getElementById('gsap-hero-heading');
    const paragraph = document.getElementById('gsap-hero-paragraph');
    const buttons = document.getElementById('gsap-hero-buttons');

    const mq = window.matchMedia('(min-width: 1150px)');

    const tl = gsap.timeline();

    tl.from(heading, {
      duration: 0.75,
      delay: 0.5,
      opacity: 0,
      x: -80,
    })
      .from(paragraph, { duration: 0.75, opacity: 0, x: -80 })
      .fromTo(
        buttons,
        { autoAlpha: 0, x: -80 },
        {
          duration: 0.75,
          autoAlpha: 1,
          x: 0,
        },
        mq.matches ? '-=0.75' : null
      );
  }, []);

  return (
    <S.Wrapper>
      <Container axis="both">
        <S.Content>
          <S.Heading id="gsap-hero-heading" tag="h1">
            Zaistniej w sieci
          </S.Heading>
          <Paragraph id="gsap-hero-paragraph">
            Zaistniej w świecie nieograniczonych możliwości
          </Paragraph>
        </S.Content>

        <S.Buttons id="gsap-hero-buttons">
          <Button priority="primary">Bezpłatna wycena</Button>
          <Button priority="secondary">Zrealizowane projekty</Button>
        </S.Buttons>
      </Container>
    </S.Wrapper>
  );
};

export default Hero;
