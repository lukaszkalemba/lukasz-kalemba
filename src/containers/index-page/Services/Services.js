import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import { graphql, useStaticQuery } from 'gatsby';
import Container from 'components/common/Container';
import Link from 'components/common/Link';
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
  const wrapper = useRef(null);

  const { design, webapp, ecommerce } = useStaticQuery(IMAGES_QUERY);

  const tl = gsap.timeline();

  const title = document.getElementById(`gsap-services-title`);
  const link = document.getElementById(`gsap-services-link`);

  const intersection = useIntersection(wrapper, {
    root: null,
    rootMargin: '0px',
    threshold: 0.9,
  });

  if (intersection && intersection.intersectionRatio > 0.9) {
    tl.to(title, {
      duration: 0.75,
      opacity: 1,
      x: -30,
    }).to(link, { duration: 0.75, opacity: 1, x: 30 }, '-=0.75');
  }

  return (
    <S.Section>
      <S.Header>
        <Container axis="both">
          <div ref={wrapper}>
            <S.Title id="gsap-services-title">
              Stwórz z nami od zera niepowtarzalny projekt, lub przenieś już
              istniejący na kolejny poziom.
            </S.Title>
            <div
              style={{ opacity: 0, marginLeft: '-30px' }}
              id="gsap-services-link"
            >
              <Link to="/wycena">Bezpłatna wycena</Link>
            </div>
          </div>
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
