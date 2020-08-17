import React from 'react';
import NotFoundContent from 'components/molecules/NotFoundContent';
import Container from 'components/particles/Container';
import S from './NotFoundSection.styles';

const NotFoundSection = () => {
  return (
    <S.Wrapper>
      <Container axis="both">
        <NotFoundContent />
      </Container>
    </S.Wrapper>
  );
};

export default NotFoundSection;
