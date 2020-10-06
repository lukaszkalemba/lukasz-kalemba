import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import useWindowSize from 'hooks/useWindowSize';
import Container from 'components/particles/Container';
import Link from 'components/atoms/Link';
import S from './ServicesCTASection.styles';
import animations from './ServicesCTASection.animations';

const ServicesCTASection = () => {
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

  const wrapperAnimations = animations.getWrapper(animation);

  return (
    <Container axis="both">
      <motion.div ref={wrapperRef} {...wrapperAnimations}>
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
