import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import animations from './ContactInformations.animations';
import S from './ContactInformations.styles';

const ContactInformations = () => {
  const animation = useAnimation();

  const [wrapperRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [animation, inView]);

  const wrapperAnimations = animations.getWrapper(animation);

  return (
    <S.Wrapper ref={wrapperRef} {...wrapperAnimations}>
      <S.Link href="tel:+48797709856">+48 797 709 856</S.Link>
      <S.Link href="mailto:lukasz.kalemba1@gmail.com">
        lukasz.kalemba1@gmail.com
      </S.Link>
    </S.Wrapper>
  );
};

export default ContactInformations;
