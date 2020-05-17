import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import animations from './ContentItem.animations';

const ContentItem = ({ content }) => {
  const animation = useAnimation();

  const [wrapperRef, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [animation, inView]);

  return (
    <motion.div
      ref={wrapperRef}
      variants={animations.contentItemVariants}
      animate={animation}
      initial="initial"
    >
      {content}
    </motion.div>
  );
};

ContentItem.propTypes = {
  content: PropTypes.shape({}).isRequired,
};

export default ContentItem;
