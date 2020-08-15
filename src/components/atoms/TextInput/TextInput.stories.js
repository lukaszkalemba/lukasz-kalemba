import React from 'react';
import withFormik from 'storybook-formik';
import * as Yup from 'yup';
import { text, withKnobs } from '@storybook/addon-knobs';
import TextInput from './TextInput';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(5, 'To pole musi składać się z conajmniej 5 znaków')
    .required('To pole jest wymagane'),
});

export const textInput = () => (
  <TextInput
    label={text('Input Label Text', 'Imię i nazwisko')}
    name="name"
    type="text"
  />
);

export default {
  component: TextInput,
  decorators: [withKnobs, withFormik],
  parameters: {
    formik: {
      initialValues: {
        name: '',
      },
      validationSchema,
    },
  },
  title: 'Atoms|TextInput',
};
