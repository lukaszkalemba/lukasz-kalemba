import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import S from './TextInput.styles';

const TextInput = ({ label, animation, ...props }) => {
  const [field, meta] = useField(props);
  const { name } = props;

  const isError = meta.touched && meta.error;

  return (
    <S.InputWrapper {...animation}>
      <S.Input id={name} isError={isError} {...field} {...props} />
      <S.Label isError={isError} htmlFor={name}>
        {label}
      </S.Label>
      <S.Error>{isError && meta.error}</S.Error>
    </S.InputWrapper>
  );
};

TextInput.defaultProps = {
  animation: {},
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  animation: PropTypes.shape({
    variants: PropTypes.shape({
      animate: PropTypes.shape({}),
      initial: PropTypes.shape({}),
    }),
  }),
  name: PropTypes.string.isRequired,
};

export default TextInput;
