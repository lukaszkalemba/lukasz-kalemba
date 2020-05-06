import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import S from './Card.styles';

const Card = ({ index, title, preSlug, slug, small }) => {
  const wrapper = useRef(null);
  const el = document.getElementById(`gsap-card-wrapper-${index}`);
  const mq = window.matchMedia('(min-width: 768px)');
  const isOffset = index % 2 !== 0 && true;

  const intersection = useIntersection(wrapper, {
    root: null,
    rootMargin: '0px',
    threshold: 0.9,
  });

  if (intersection && intersection.intersectionRatio > 0.9) {
    gsap.to(el, {
      opacity: 1,
      delay: 0.05,
      y: mq.matches ? isOffset && 45 : 0,
      duration: 0.75,
    });
  }

  return (
    <div ref={wrapper}>
      <S.Link to={`/${preSlug}/${slug}`}>
        <S.Article id={`gsap-card-wrapper-${index}`} small={small}>
          <S.Overlay />
          <S.Title>{title}</S.Title>
        </S.Article>
      </S.Link>
    </div>
  );
};

Card.defaultProps = {
  small: false,
};

Card.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  preSlug: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

export default Card;
