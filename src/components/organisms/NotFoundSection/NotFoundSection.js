import React from 'react';
import NotFoundSectionContent from 'components/molecules/NotFoundSectionContent';
import Container from 'components/particles/Container';
import S from './NotFoundSection.styles';

const NotFoundSection = () => {
  return (
    <S.Wrapper>
      <Container axis="both">
        <NotFoundSectionContent />
      </Container>
    </S.Wrapper>
  );
};

export default NotFoundSection;
