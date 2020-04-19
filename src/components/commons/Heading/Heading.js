import React from 'react';
import PropTypes from 'prop-types';
import S from './Heading.styles';

const Heading = ({ tag, children }) => {
  let HeadingTag;

  if (tag === 'h1') {
    HeadingTag = S.Heading.H1;
  } else {
    HeadingTag = S.Heading.H2;
  }

  return <HeadingTag>{children}</HeadingTag>;
};

Heading.defaultProps = {
  tag: 'h2',
};

Heading.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Heading;
