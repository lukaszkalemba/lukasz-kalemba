import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import Background from 'gatsby-background-image';
import S from './Card.styles';
import animations from './Card.animations';

const Card = ({ index, title, image, preSlug, slug, small }) => {
  const mq = window.matchMedia('(min-width: 768px)');
  const isOffset = index % 2 !== 0 && true;

  const animation = useAnimation();

  const [wrapperRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [animation, inView]);

  return (
    <S.Wrapper
      ref={wrapperRef}
      variants={animations.getCardVariants(isOffset, mq)}
      animate={animation}
      initial="initial"
    >
      <Background fluid={image.fluid}>
        <S.Link to={`/${preSlug}/${slug}`}>
          <S.Article small={small}>
            <S.Overlay />
            <S.Title>{title}</S.Title>
          </S.Article>
        </S.Link>
      </Background>
    </S.Wrapper>
  );
};

Card.defaultProps = {
  small: false,
};

Card.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    fluid: PropTypes.object,
  }).isRequired,
  preSlug: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

export default Card;
