import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Service from 'components/atoms/Service';
import animations from './ServicesWrapper.animations';

const ServicesWrapper = ({ images, animation }) => {
  return (
    <motion.div
      animate={animation}
      initial="initial"
      variants={animations.wrapperVariants}
    >
      <Service
        img={images.design.childImageSharp}
        variants={animations.servicesVariants}
      >
        Projektowanie interfejsów
      </Service>
      <Service
        img={images.webapp.childImageSharp}
        variants={animations.servicesVariants}
      >
        Strony i aplikacje internetowe
      </Service>
      <Service
        img={images.ecommerce.childImageSharp}
        variants={animations.servicesVariants}
      >
        Sklepy internetowe
      </Service>
    </motion.div>
  );
};

ServicesWrapper.defaultProps = {
  animation: {},
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
  animation: PropTypes.shape({}),
};

export default ServicesWrapper;
