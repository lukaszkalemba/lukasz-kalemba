import React from 'react';
import Container from 'components/commons/Container';
import Button from 'components/commons/Button';
import S from './NotFound.styles';

const NotFound = () => {
  return (
    <S.Wrapper>
      <Container axis="both">
        <main>
          <Container axis="both">
            <S.Heading tag="h1">Coś poszło nie tak...</S.Heading>
            <S.ButtonWrapper>
              <Button priority="secondary">Strona główna</Button>
            </S.ButtonWrapper>
          </Container>
        </main>
      </Container>
    </S.Wrapper>
  );
};

export default NotFound;
