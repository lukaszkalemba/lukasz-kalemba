import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import Background from 'gatsby-background-image';
import useWindowSize from 'hooks/useWindowSize';
import S from './Card.styles';
import animations from './Card.animations';

const Card = ({ index, title, image, preSlug, slug, small }) => {
  const size = useWindowSize();
  const animation = useAnimation();

  const isOffset = index % 2 !== 0 && true;

  const [wrapperRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [animation, inView]);

  const wrapperAnimations = animations.getCard(isOffset, size, animation);

  return (
    <S.Wrapper ref={wrapperRef} {...wrapperAnimations}>
      <Background fluid={image.fluid}>
        <S.Article small={small} data-testid="card-article">
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
  small: false,
};

Card.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    fluid: PropTypes.shape({}),
  }).isRequired,
  preSlug: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

export default Card;
