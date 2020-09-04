import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import S from './Button.styles';

const Button = ({ type, path, priority, className, children, onClick }) => {
  let ButtonWrapper;
  let buttonWrapperProps = null;

  if (type === 'button') {
    ButtonWrapper = S.Link;
    buttonWrapperProps = {
      to: path,
    };
  } else {
    ButtonWrapper = Fragment;
  }

  return (
    <ButtonWrapper {...buttonWrapperProps}>
      <S.Button
        priority={priority}
        type={type}
        className={className}
        onClick={onClick}
      >
        <span>{children}</span>
      </S.Button>
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  type: 'button',
  path: '',
  className: '',
  onClick: () => {},
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  path: PropTypes.string,
  priority: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
