import React from 'react';
import Button from 'components/atoms/Button';
import Container from 'components/particles/Container';
import animations from './NotFoundSectionContent.animation';
import S from './NotFoundSectionContent.styles';

const NotFoundSectionContent = () => {
  return (
    <Container axis="both">
      <S.Heading tag="h1">Coś poszło nie tak...</S.Heading>
      <S.ButtonWrapper {...animations.buttonWrapper}>
        <Button type="link" path="/" priority="secondary">
          Strona główna
        </Button>
      </S.ButtonWrapper>
    </Container>
  );
};

export default NotFoundSectionContent;
