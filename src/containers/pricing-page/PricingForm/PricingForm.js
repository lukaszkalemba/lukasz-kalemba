import React from 'react';
import Heading from 'components/common/Heading';
import Container from 'components/common/Container';
import S from './PricingForm.styles';

const NotFound = () => {
  return (
    <Container axis="both">
      <S.Wrapper>
        <Heading>Opowiedz nam o swoim pomyśle.</Heading>
      </S.Wrapper>
    </Container>
  );
};

export default NotFound;
