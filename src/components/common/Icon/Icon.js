import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import S from './Icon.styles';

const Icon = ({ src, ...props }) => {
  return (
    <S.Wrapper {...props}>
      <SVG src={src} />
    </S.Wrapper>
  );
};

Icon.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Icon;
