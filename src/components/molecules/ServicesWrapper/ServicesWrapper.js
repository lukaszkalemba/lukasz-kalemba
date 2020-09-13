import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Service from 'components/atoms/Service';
import animations from './ServicesWrapper.animations';

const ServicesWrapper = ({ images, animation }) => {
  const wrapperAnimation = animations.getWrapper(animation);

  return (
    <motion.div {...wrapperAnimation}>
      <Service
        img={images.design.childImageSharp}
        animation={animations.service}
      >
        Projektowanie interfejsów
      </Service>
      <Service
        img={images.webapp.childImageSharp}
        animation={animations.service}
      >
        Strony i aplikacje internetowe
      </Service>
      <Service
        img={images.ecommerce.childImageSharp}
        animation={animations.service}
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
