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
      <S.Input
        isError={isError}
        {...field}
        {...props}
        data-testid="text-input"
      />
      <S.Label isError={isError} htmlFor={name} data-testid="text-input-label">
        {label}
      </S.Label>
      {isError && <S.Error>{meta.error}</S.Error>}
    </S.InputWrapper>
  );
};

TextInput.defaultProps = {
  variants: {},
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  variants: PropTypes.shape({
    animate: PropTypes.object,
    initial: PropTypes.object,
  }),
  name: PropTypes.string.isRequired,
};

export default TextInput;
