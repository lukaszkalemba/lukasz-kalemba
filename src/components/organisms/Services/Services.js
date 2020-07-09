import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import useWindowSize from 'hooks/useWindowSize';
import ServicesCTASection from 'components/molecules/ServicesCTASection';
import ServicesWrapper from 'components/molecules/ServicesWrapper';

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
  const images = useStaticQuery(IMAGES_QUERY);
  const animation = useAnimation();
  const size = useWindowSize();

  const [wrapperRef, inView] = useInView({
    triggerOnce: true,
    threshold: size.width > 1150 ? 0.6 : 0.3,
  });

  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [animation, inView]);

  return (
    <S.Section ref={wrapperRef}>
      <S.Header>
        <ServicesCTASection animation={animation} />
      </S.Header>
      <ServicesWrapper animation={animation} images={images} />
    </S.Section>
  );
};

export default Services;
