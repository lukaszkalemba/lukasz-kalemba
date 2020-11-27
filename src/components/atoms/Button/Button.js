import React from 'react';
import PropTypes from 'prop-types';
import S from './Button.styles';

const Button = ({ type, path, priority, onClick, className, children }) => {
  const linkProps = {
    as: S.Link,
    to: path,
  };

  const submitProps = {
    type: 'submit',
  };

  const props = type === 'link' ? linkProps : submitProps;

  return (
    <S.Button
      priority={priority}
      onClick={onClick}
      className={className}
      {...props}
    >
      <span>{children}</span>
    </S.Button>
  );
};

Button.defaultProps = {
  path: '',
  onClick: undefined,
  className: '',
};

Button.propTypes = {
  type: PropTypes.oneOf(['link', 'submit']).isRequired,
  path: ({ type, path }) => {
    if (type === 'link' && !path) {
      throw new Error('You have to pass path property if button type is link');
    }
  },
  priority: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Button;
