import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import links from 'utils/links';
import animations from './FooterLinks.animations';
import S from './FooterLinks.styles';

const FooterLinks = () => {
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
      {links.map(({ id, path, name }) => (
        <S.Link key={id} to={path}>
          {name}
        </S.Link>
      ))}
    </S.Wrapper>
  );
};

export default FooterLinks;
