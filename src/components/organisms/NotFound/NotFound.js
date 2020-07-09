import React from 'react';
import NotFoundContent from 'components/molecules/NotFoundContent';
import Container from 'components/particles/Container';
import S from './NotFound.styles';

const NotFound = () => {
  return (
    <S.Wrapper>
      <Container axis="both">
        <NotFoundContent />
      </Container>
    </S.Wrapper>
  );
};

export default NotFound;
