import React from 'react';
import withFormik from 'storybook-formik';
import * as Yup from 'yup';
import { text, withKnobs } from '@storybook/addon-knobs';
import TextareaInput from './TextareaInput';

const validationSchema = Yup.object({
  description: Yup.string()
    .min(15, 'To pole musi składać się z conajmniej 15 znaków')
    .required('To pole jest wymagane'),
});

export const textareaInput = () => (
  <TextareaInput
    label={text('Textarea Label Text', 'Opis projektu')}
    name="description"
    rows="8"
  />
);

export default {
  component: TextareaInput,
  decorators: [withKnobs, withFormik],
  parameters: {
    formik: {
      initialValues: {
        description: '',
      },
      validationSchema,
    },
  },
  title: 'Atoms|TextareaInput',
};
