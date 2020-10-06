import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ServicesCTASection from 'components/molecules/ServicesCTASection';
import ServicesWrapper from 'components/molecules/ServicesWrapper';
import S from './OfferedServices.styles';

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

const OfferedServices = () => {
  const images = useStaticQuery(IMAGES_QUERY);

  return (
    <S.Section>
      <S.Header>
        <ServicesCTASection />
      </S.Header>
      <ServicesWrapper images={images} />
    </S.Section>
  );
};

export default OfferedServices;
