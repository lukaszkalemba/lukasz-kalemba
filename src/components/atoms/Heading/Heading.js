import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import S from './Heading.styles';
import animations from './Heading.animations';

const Heading = ({ isH1, animation, className, children }) => {
  const animate = useAnimation();

  const [headingRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) {
      animate.start('animate');
    }
  }, [animate, inView]);

  const headingAnimations = animations.getHeading(animation, animate);

  let HeadingTag;

  if (isH1) {
    HeadingTag = S.H1;
  } else {
    HeadingTag = S.H2;
  }

  return (
    <HeadingTag ref={headingRef} className={className} {...headingAnimations}>
      {children}
    </HeadingTag>
  );
};

Heading.defaultProps = {
  isH1: false,
  animation: null,
  className: '',
};

Heading.propTypes = {
  isH1: PropTypes.bool,
  animation: PropTypes.shape({
    variants: PropTypes.shape({
      animate: PropTypes.shape({}),
      initial: PropTypes.shape({}),
    }),
  }),
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Heading;
