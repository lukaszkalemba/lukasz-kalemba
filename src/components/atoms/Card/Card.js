import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import Background from 'gatsby-background-image';
import S from './Card.styles';
import animations from './Card.animations';

const Card = ({ isOffset, title, image, preSlug, slug, small }) => {
  const animation = useAnimation();

  const [wrapperRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [animation, inView, isOffset]);

  const wrapperAnimations = animations.getCard(isOffset, animation);

  return (
    <S.Wrapper ref={wrapperRef} {...wrapperAnimations}>
      <Background fluid={image.fluid}>
        <S.Article small={small}>
          <S.Link to={`/${preSlug}/${slug}`}>
            <S.Overlay />
            <S.Title>{title}</S.Title>
          </S.Link>
        </S.Article>
      </Background>
    </S.Wrapper>
  );
};

Card.defaultProps = {
  isOffset: false,
  small: false,
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    fluid: PropTypes.shape({}),
  }).isRequired,
  preSlug: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  isOffset: PropTypes.bool,
  small: PropTypes.bool,
};

export default Card;
