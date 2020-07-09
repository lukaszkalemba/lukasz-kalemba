import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Container from 'components/particles/Container';
import Link from 'components/atoms/Link';
import Heading from 'components/atoms/ServicesCTAHeading';
import animations from './ServicesCTASection.animations';

const ServicesCTASection = ({ animation }) => {
  return (
    <Container axis="both">
      <motion.div
        animate={animation}
        initial="initial"
        variants={animations.wrapperVariants}
      >
        <Heading animations={animations}>
          Stwórz z nami od zera niepowtarzalny projekt, lub przenieś już
          istniejący na kolejny poziom.
        </Heading>
        <motion.div variants={animations.childrenVariants}>
          <Link to="/wycena">Bezpłatna wycena</Link>
        </motion.div>
      </motion.div>
    </Container>
  );
};

ServicesCTASection.propTypes = {
  animation: PropTypes.shape({}).isRequired,
};

export default ServicesCTASection;
