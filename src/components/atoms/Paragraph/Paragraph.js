import React from 'react';
import PropTypes from 'prop-types';
import S from './Paragraph.styles';

const Paragraph = ({ variants, className, children }) => {
  return (
    <S.Paragraph variants={variants} className={className}>
      {children}
    </S.Paragraph>
  );
};

Paragraph.defaultProps = {
  variants: null,
  className: '',
};

Paragraph.propTypes = {
  variants: PropTypes.shape({
    animate: PropTypes.object,
    initial: PropTypes.object,
  }),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Paragraph;
