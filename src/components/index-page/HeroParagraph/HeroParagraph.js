import React from 'react';
import PropTypes from 'prop-types';
import S from './HeroParagraph.styles';

const HeroParagraph = ({ children }) => {
  return (
    <S.Paragraph
      initial={{
        x: -150,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 0.5,
      }}
      transition={{
        delay: 0.5,
        duration: 0.5,
      }}
    >
      {children}
    </S.Paragraph>
  );
};

HeroParagraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default HeroParagraph;
