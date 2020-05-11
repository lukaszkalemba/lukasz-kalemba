import React from 'react';
import PropTypes from 'prop-types';
import S from './Button.styles';

const Button = ({ path, priority, children }) => {
  return (
    <S.Link to={path}>
      <S.Button priority={priority} type="button">
        <span>{children}</span>
      </S.Button>
    </S.Link>
  );
};

Button.propTypes = {
  path: PropTypes.string.isRequired,
  priority: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
