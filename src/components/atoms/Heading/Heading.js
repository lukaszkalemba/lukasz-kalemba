import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import S from './Heading.styles';
import animations from './Heading.animations';

const Heading = ({ tag, homePage, animation, className, children }) => {
  const isH1 = tag === 'h1' && true;
  let HeadingTag;

  if (isH1) {
    HeadingTag = S.Heading.H1;
  } else {
    HeadingTag = S.Heading.H2;
  }

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

  return (
    <HeadingTag
      ref={headingRef}
      homePage={homePage}
      className={className}
      {...headingAnimations}
    >
      {children}
    </HeadingTag>
  );
};

Heading.defaultProps = {
  tag: 'h2',
  homePage: false,
  animation: null,
  className: '',
};

Heading.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2']),
  homePage: PropTypes.bool,
  animation: PropTypes.shape({
    variants: PropTypes.shape({
      animate: PropTypes.shape({}),
      initial: PropTypes.shape({}),
    }),
  }),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Heading;
