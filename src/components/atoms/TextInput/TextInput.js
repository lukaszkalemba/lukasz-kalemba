import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import S from './TextInput.styles';

const TextInput = ({ label, variants, ...props }) => {
  const [field, meta] = useField(props);
  const { name } = props;
  const isError = !!(meta.touched && meta.error);

  return (
    <S.InputWrapper variants={variants}>
      <S.Input isError={isError} {...field} {...props} />
      <S.Label isError={isError} htmlFor={name}>
        {label}
      </S.Label>
      {isError && <S.Error>{meta.error}</S.Error>}
    </S.InputWrapper>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  variants: PropTypes.shape({
    animate: PropTypes.object,
    initial: PropTypes.object,
  }).isRequired,
  name: PropTypes.string.isRequired,
};

export default TextInput;
