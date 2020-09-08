import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import S from './Heading.styles';
import animations from './Heading.animations';

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
      variants={isH1 ? variants : animations.sectionHeadingVariants}
      animate={animation}
      initial="initial"
      className={className}
      data-testid="heading"
    >
      {children}
    </HeadingTag>
  );
};

Heading.defaultProps = {
  tag: 'h2',
  variants: null,
  className: '',
};

Heading.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2']),
  variants: PropTypes.shape({
    animate: PropTypes.object,
    initial: PropTypes.object,
  }),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Heading;
