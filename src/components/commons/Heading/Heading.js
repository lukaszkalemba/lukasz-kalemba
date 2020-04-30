import React from 'react';
import PropTypes from 'prop-types';
import S from './Heading.styles';

const Heading = ({ tag, id, className, children }) => {
  let HeadingTag;

  if (tag === 'h1') {
    HeadingTag = S.Heading.H1;
  } else {
    HeadingTag = S.Heading.H2;
  }

  return (
    <HeadingTag id={id} className={className}>
      {children}
    </HeadingTag>
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
