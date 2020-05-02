import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from 'components/commons/Container';
import Link from 'components/commons/Link';
import Service from 'components/index-page/Service';
import S from './Services.styles';

const IMAGES_QUERY = graphql`
  {
    design: file(relativePath: { eq: "photo_service-design.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    webapp: file(relativePath: { eq: "photo_service-webapp.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    ecommerce: file(relativePath: { eq: "photo_service-ecommerce.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

const Services = () => {
  const { design, webapp, ecommerce } = useStaticQuery(IMAGES_QUERY);

  return (
    <S.Section>
      <S.Header>
        <Container axis="both">
          <S.Title>
            Stwórz z nami od zera niepowtarzalny projekt, lub przenieś już
            istniejący na kolejny poziom.
          </S.Title>
          <Link to="/wycena">Bezpłatna wycena</Link>
        </Container>
      </S.Header>

      <div>
        <Service img={design.childImageSharp}>
          Projektowanie interfejsów
        </Service>
        <Service img={webapp.childImageSharp}>
          Strony i aplikacje internetowe
        </Service>
        <Service img={ecommerce.childImageSharp}>Sklepy internetowe</Service>
      </div>
    </S.Section>
  );
};

export default Services;
