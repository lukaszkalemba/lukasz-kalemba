import React from 'react';
import PropTypes from 'prop-types';
import S from './HeroParagraph.styles';

const HeroParagraph = ({ id, children }) => {
  return <S.Paragraph id={id}>{children}</S.Paragraph>;
};

HeroParagraph.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default HeroParagraph;
