import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Container from 'components/particles/Container';
import Link from 'components/atoms/Link';
import S from './ServicesCTASection.styles';
import {
  wrapperVariants,
  childrenVariants,
} from './ServicesCTASection.animations';

const ServicesCTASection = ({ animation }) => {
  return (
    <Container axis="both">
      <motion.div
        animate={animation}
        initial="initial"
        variants={wrapperVariants}
      >
        <S.Heading variants={childrenVariants}>
          Stwórz z nami od zera niepowtarzalny projekt, lub przenieś już
          istniejący na kolejny poziom.
        </S.Heading>
        <motion.div variants={childrenVariants}>
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
