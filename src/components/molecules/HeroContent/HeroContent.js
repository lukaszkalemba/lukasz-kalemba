import React from 'react';
import useWindowSize from 'hooks/useWindowSize';
import animations from './HeroContent.animations';
import S from './HeroContent.styles';

const HeroContent = () => {
  const size = useWindowSize();

  const isMobile = size.width < 1150;

  const headingAnimation = animations.getHeading(isMobile);
  const paragraphAnimation = animations.getParagraph(isMobile);
  const buttonsAnimation = animations.getButtons(isMobile);

  return (
    <S.Container axis="both">
      <div>
        <S.Content>
          <S.Heading tag="h1" homePage animation={headingAnimation}>
            Zaistniej w sieci
          </S.Heading>
          <S.Paragraph animation={paragraphAnimation}>
            <span>Zaistniej w świecie&nbsp;</span>
            <span>nieograniczonych możliwości</span>
          </S.Paragraph>
        </S.Content>

        <S.Buttons {...buttonsAnimation}>
          <S.Button type="link" path="/wycena" priority="primary">
            Bezpłatna wycena
          </S.Button>
          <S.Button type="link" path="/projekty" priority="secondary">
            Zrealizowane projekty
          </S.Button>
        </S.Buttons>
      </div>
    </S.Container>
  );
};

export default HeroContent;
