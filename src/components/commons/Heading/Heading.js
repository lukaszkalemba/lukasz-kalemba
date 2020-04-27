import React from 'react';
import PropTypes from 'prop-types';
import S from './Heading.styles';

const Heading = ({ tag, className, children, ...rest }) => {
  let HeadingTag;

  if (tag === 'h1') {
    HeadingTag = S.Heading.H1;
  } else {
    HeadingTag = S.Heading.H2;
  }

  return (
    <HeadingTag className={className} {...rest}>
      {children}
    </HeadingTag>
  );
};

Heading.defaultProps = {
  tag: 'h2',
  className: '',
};

Heading.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Heading;
