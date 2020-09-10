import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import Icon from 'components/atoms/Icon';
import arrow from 'assets/svgs/icon_arrow.svg';
import S from './Link.styles';
import animations from './Link.animations';

const Link = ({ to, animate, children }) => {
  const animation = useAnimation();

  const [wrapperRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [animation, inView]);

  return (
    <S.Wrapper
      ref={wrapperRef}
      variants={animate ? animations.linkVariants : null}
      animate={animation}
      initial="initial"
    >
      <S.Link to={to} data-testid="link">
        {children}
        <S.Arrow>
          <Icon src={arrow} />
        </S.Arrow>
      </S.Link>
    </S.Wrapper>
  );
};

Link.defaultProps = {
  animate: false,
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  animate: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Link;
