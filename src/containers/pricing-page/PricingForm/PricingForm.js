import React from 'react';
import Container from 'components/common/Container';
import PricingImage from 'components/pricing-page/PricingImage';
import S from './PricingForm.styles';

const NotFound = () => {
  return (
    <Container axis="both">
      <Container axis="x">
        <S.Wrapper>
          <div>
            <S.Heading>Opowiedz nam o swoim pomyśle.</S.Heading>
            <form>
              <S.InputWrapper>
                <S.Input id="name" type="text" required />
                <S.Label htmlFor="name">Imię i nazwisko</S.Label>
              </S.InputWrapper>

              <S.InputWrapper>
                <S.Input id="company" type="text" required />
                <S.Label htmlFor="company">Firma</S.Label>
              </S.InputWrapper>

              <S.InputWrapper>
                <S.Input id="email" type="text" required />
                <S.Label htmlFor="email">Adres e-mail</S.Label>
              </S.InputWrapper>

              <S.InputWrapper>
                <S.Input id="phone-number" type="text" required />
                <S.Label htmlFor="phone-number">Numer telefonu</S.Label>
              </S.InputWrapper>
            </form>
          </div>

          <PricingImage />
        </S.Wrapper>
      </Container>
    </Container>
  );
};

export default NotFound;
