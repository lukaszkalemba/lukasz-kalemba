import React from 'react';
import useWindowSize from 'hooks/useWindowSize';
import Button from 'components/atoms/Button';
import Container from 'components/particles/Container';
import animations from './NotFoundSectionContent.animation';
import S from './NotFoundSectionContent.styles';

const NotFoundSectionContent = () => {
  const size = useWindowSize();

  const isMobile = size.width < 1150;

  const buttonAnimation = animations.getButton(isMobile);

  return (
    <Container axis="both">
      <S.Heading isH1>Coś poszło nie tak...</S.Heading>
      <S.ButtonWrapper {...buttonAnimation}>
        <Button type="link" path="/" priority="secondary">
          Strona główna
        </Button>
      </S.ButtonWrapper>
    </Container>
  );
};

export default NotFoundSectionContent;
