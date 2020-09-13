import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Container from 'components/particles/Container';
import Link from 'components/atoms/Link';
import S from './ServicesCTASection.styles';
import animations from './ServicesCTASection.animations';

const ServicesCTASection = ({ animation }) => {
  const wrapperAnimations = animations.getWrapper(animation);

  return (
    <Container axis="both">
      <motion.div {...wrapperAnimations}>
        <S.Heading {...animations.children}>
          Stwórzmy od zera niepowtarzalny projekt, lub przenieśmy już istniejący
          na kolejny poziom.
        </S.Heading>
        <motion.div {...animations.children}>
          <Link to="/wycena">Bezpłatna wycena</Link>
        </motion.div>
      </motion.div>
    </Container>
  );
};

ServicesCTASection.defaultProps = {
  animation: {},
};

ServicesCTASection.propTypes = {
  animation: PropTypes.shape({}),
};

export default ServicesCTASection;
