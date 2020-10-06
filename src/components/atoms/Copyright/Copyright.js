import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import animations from './Copyright.animations';
import S from './Copyright.styles';

const Copyright = () => {
  const animation = useAnimation();

  const [copyrightRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [animation, inView]);

  const copyrightAnimations = animations.getCopyright(animation);
  return (
    <S.Copyright ref={copyrightRef} {...copyrightAnimations}>
      <span>lukaszkalemba&copy; 2020.&nbsp;</span>
      <span>Wszelkie prawa zastrzeżone.</span>
    </S.Copyright>
  );
};

export default Copyright;
