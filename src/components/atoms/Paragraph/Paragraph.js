import React from 'react';
import PropTypes from 'prop-types';
import S from './Paragraph.styles';

const Paragraph = ({ animation, className, children }) => {
  return (
    <S.Paragraph className={className} {...animation}>
      {children}
    </S.Paragraph>
  );
};

Paragraph.defaultProps = {
  animation: null,
  className: '',
};

Paragraph.propTypes = {
  animation: PropTypes.shape({
    variants: PropTypes.shape({
      animate: PropTypes.shape({}),
      initial: PropTypes.shape({}),
    }),
  }),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Paragraph;
