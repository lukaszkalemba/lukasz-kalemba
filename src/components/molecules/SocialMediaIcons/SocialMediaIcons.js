import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import Icon from 'components/atoms/Icon';
import facebook from 'assets/svgs/icon_facebook.svg';
import instagram from 'assets/svgs/icon_instagram.svg';
import dribbble from 'assets/svgs/icon_dribbble.svg';
import linkedin from 'assets/svgs/icon_linkedin.svg';
import animations from './SocialMediaIcons.animations';
import S from './SocialMediaIcons.styles';

const SocialMediaIcons = ({ className }) => {
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
    <S.Wrapper ref={wrapperRef} {...wrapperAnimations} className={className}>
      <S.A href="https://facebook.com" aria-label="facebook" target="__blank">
        <Icon src={facebook} />
      </S.A>
      <S.A href="https://instagram.com" aria-label="instagram" target="__blank">
        <Icon src={instagram} />
      </S.A>
      <S.A href="https://dribbble.com" aria-label="dribbble" target="__blank">
        <Icon src={dribbble} />
      </S.A>
      <S.A href="https://linkedin.com" aria-label="linkedin" target="__blank">
        <Icon src={linkedin} />
      </S.A>
    </S.Wrapper>
  );
};

SocialMediaIcons.defaultProps = {
  className: '',
};

SocialMediaIcons.propTypes = {
  className: PropTypes.string,
};

export default SocialMediaIcons;
