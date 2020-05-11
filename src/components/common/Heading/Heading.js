import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import S from './Heading.styles';

const Heading = ({ tag, variants, className, children }) => {
  const isH1 = tag === 'h1' && true;
  let HeadingTag;

  if (isH1) {
    HeadingTag = S.Heading.H1;
  } else {
    HeadingTag = S.Heading.H2;
  }

  const animation = useAnimation();
  const [headingRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [animation, inView]);

  return (
    <HeadingTag
      ref={headingRef}
      variants={variants}
      animate={animation}
      initial="initial"
      className={className}
    >
      {children}
    </HeadingTag>
  );
};

Heading.defaultProps = {
  tag: 'h2',
  className: '',
};

Heading.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2']),
  variants: PropTypes.shape({
    animate: PropTypes.object,
    initial: PropTypes.object,
  }).isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Heading;
