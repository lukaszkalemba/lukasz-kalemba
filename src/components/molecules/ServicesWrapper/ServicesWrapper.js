import React from 'react';
import PropTypes from 'prop-types';
import Service from 'components/atoms/Service';

const ServicesWrapper = ({ images }) => {
  return (
    <div>
      <Service img={images.design.childImageSharp}>
        Projektowanie interfejsów
      </Service>
      <Service img={images.webapp.childImageSharp}>
        Strony i aplikacje internetowe
      </Service>
      <Service img={images.ecommerce.childImageSharp}>
        Sklepy internetowe
      </Service>
    </div>
  );
};

ServicesWrapper.propTypes = {
  images: PropTypes.shape({
    design: PropTypes.shape({
      childImageSharp: PropTypes.shape({}),
    }),
    webapp: PropTypes.shape({
      childImageSharp: PropTypes.shape({}),
    }),
    ecommerce: PropTypes.shape({
      childImageSharp: PropTypes.shape({}),
    }),
  }).isRequired,
};

export default ServicesWrapper;
