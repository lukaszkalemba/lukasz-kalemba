import React from 'react';
import Button from 'components/atoms/Button';
import Container from 'components/particles/Container';
import S from './NotFoundContent.styles';

const NotFoundContent = () => {
  return (
    <main>
      <Container axis="both">
        <S.Heading tag="h1">Coś poszło nie tak...</S.Heading>
        <S.ButtonWrapper>
          <Button priority="secondary">Strona główna</Button>
        </S.ButtonWrapper>
      </Container>
    </main>
  );
};

export default NotFoundContent;
