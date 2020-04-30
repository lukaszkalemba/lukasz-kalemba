import React from 'react';
import PropTypes from 'prop-types';
import S from './HeroParagraph.styles';

const HeroParagraph = ({ children }) => {
  return <S.Paragraph>{children}</S.Paragraph>;
};

HeroParagraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default HeroParagraph;
