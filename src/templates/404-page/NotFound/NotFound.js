import React from 'react';
import Container from 'components/commons/Container';
import Heading from 'components/commons/Heading';
import Button from 'components/commons/Button';
import S from './NotFound.styles';

const NotFound = () => {
  return (
    <S.Wrapper>
      <Container axis="both">
        <main>
          <Container axis="both">
            <Heading tag="h1">Coś poszło nie tak...</Heading>
            <S.ButtonWrapper>
              <Button priority="secondary">Zrealizowane projekty</Button>
            </S.ButtonWrapper>
          </Container>
        </main>
      </Container>
    </S.Wrapper>
  );
};

export default NotFound;
