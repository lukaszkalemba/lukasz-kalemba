import React from 'react';
import PropTypes from 'prop-types';
import S from './Button.styles';

const Button = ({ priority, children }) => {
  return (
    <S.Button priority={priority} type="button">
      <span>{children}</span>
    </S.Button>
  );
};

Button.propTypes = {
  priority: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
