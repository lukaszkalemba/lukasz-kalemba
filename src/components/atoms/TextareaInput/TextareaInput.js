import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import S from './TextareaInput.styles';

const TextareaInput = ({ label, variants, ...props }) => {
  const [field, meta] = useField(props);
  const { name } = props;
  const isError = !!(meta.touched && meta.error);

  return (
    <S.TextareaWrapper variants={variants}>
      <S.Textarea isError={isError} {...field} {...props} />
      <S.Label isError={isError} htmlFor={name} data-testid="textarea-label">
        {label}
      </S.Label>
      {isError && <S.Error>{meta.error}</S.Error>}
    </S.TextareaWrapper>
  );
};

TextareaInput.defaultProps = {
  variants: {},
};

TextareaInput.propTypes = {
  label: PropTypes.string.isRequired,
  variants: PropTypes.shape({
    animate: PropTypes.object,
    initial: PropTypes.object,
  }),
  name: PropTypes.string.isRequired,
};

export default TextareaInput;
