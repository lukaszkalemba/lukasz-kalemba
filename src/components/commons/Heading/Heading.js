import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import PropTypes from 'prop-types';
import S from './Heading.styles';

const Heading = ({ tag, id, className, children }) => {
  const heading = useRef(null);

  const headingElement = document.querySelectorAll('.gsap-heading');
  const isH1 = tag === 'h1' && true;
  let HeadingTag;

  if (isH1) {
    HeadingTag = S.Heading.H1;
  } else {
    HeadingTag = S.Heading.H2;
  }

  const intersection = useIntersection(heading, {
    root: null,
    rootMargin: '0px',
    threshold: 0.9,
  });

  if (intersection && intersection.intersectionRatio > 0.9) {
    gsap.to(headingElement, {
      x: '3%',
      duration: 0.75,
    });
  }

  return (
    <div ref={isH1 ? null : heading}>
      <HeadingTag
        id={isH1 ? id : null}
        className={isH1 ? className : `${className} gsap-heading`}
      >
        {children}
      </HeadingTag>
    </div>
  );
};

Heading.defaultProps = {
  tag: 'h2',
  id: '',
  className: '',
};

Heading.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2']),
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Heading;
