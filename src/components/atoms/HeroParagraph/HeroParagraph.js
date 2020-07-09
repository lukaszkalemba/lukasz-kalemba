import React from 'react';
import PropTypes from 'prop-types';
import S from './HeroParagraph.styles';

const HeroParagraph = ({ variants, children }) => {
  return <S.Paragraph variants={variants}>{children}</S.Paragraph>;
};

HeroParagraph.defaultProps = {
  variants: null,
};

HeroParagraph.propTypes = {
  variants: PropTypes.shape({
    animate: PropTypes.object,
    initial: PropTypes.object,
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default HeroParagraph;
