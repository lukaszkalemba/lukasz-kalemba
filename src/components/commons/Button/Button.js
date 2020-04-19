import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ priority, children }) => {
  return (
    <button priority={priority} type="button">
      {children}
    </button>
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
