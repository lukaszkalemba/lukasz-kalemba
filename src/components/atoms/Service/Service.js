import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import { useAnimation } from 'framer-motion';
import animations from './Service.animations';
import S from './Service.styles';

const Service = ({ image, children }) => {
  const animation = useAnimation();

  const [titleRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [animation, inView]);

  const titleAnimation = animations.getTitle(animation);

  return (
    <S.Article>
      <S.Overlay fluid={image.fluid} />
      <S.Title ref={titleRef} {...titleAnimation}>
        {children}
      </S.Title>
    </S.Article>
  );
};

Service.propTypes = {
  image: PropTypes.shape({
    fluid: PropTypes.shape({}),
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Service;
