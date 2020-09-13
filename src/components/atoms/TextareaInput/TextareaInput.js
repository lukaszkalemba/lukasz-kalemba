import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import S from './TextareaInput.styles';

const TextareaInput = ({ label, animation, ...props }) => {
  const [field, meta] = useField(props);
  const { name } = props;

  const isError = meta.touched && meta.error;

  return (
    <S.TextareaWrapper {...animation}>
      <S.Textarea isError={isError} {...field} {...props} />
      <S.Label isError={isError} htmlFor={name}>
        {label}
      </S.Label>
      <S.Error>{isError && meta.error}</S.Error>
    </S.TextareaWrapper>
  );
};

TextareaInput.defaultProps = {
  animation: {},
};

TextareaInput.propTypes = {
  label: PropTypes.string.isRequired,
  animation: PropTypes.shape({
    variants: PropTypes.shape({
      animate: PropTypes.shape({}),
      initial: PropTypes.shape({}),
    }),
  }),
  name: PropTypes.string.isRequired,
};

export default TextareaInput;
