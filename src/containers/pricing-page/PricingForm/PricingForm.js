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
        </div>

        <S.ImageWrapper>
          <S.Image fluid={officeImage.childImageSharp.fluid} />
        </S.ImageWrapper>
      </S.Wrapper>
    </Container>
  );
};

export default NotFound;
