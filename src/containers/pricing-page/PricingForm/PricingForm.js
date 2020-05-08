import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Heading from 'components/common/Heading';
import Container from 'components/common/Container';
import S from './PricingForm.styles';

const IMAGE_QUERY = graphql`
  {
    officeImage: file(relativePath: { eq: "photo_office.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

const NotFound = () => {
  const { officeImage } = useStaticQuery(IMAGE_QUERY);

  return (
    <Container axis="both">
      <S.Wrapper>
        <div>
          <Heading>Opowiedz nam o swoim pomyśle.</Heading>
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

        <S.ImageWrapper>
          <S.Image fluid={officeImage.childImageSharp.fluid} />
        </S.ImageWrapper>
      </S.Wrapper>
    </Container>
  );
};

export default NotFound;
