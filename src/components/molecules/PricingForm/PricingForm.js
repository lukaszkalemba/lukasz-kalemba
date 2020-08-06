import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from 'components/atoms/Button';
import TextInput from 'components/atoms/TextInput';
import TextareaInput from 'components/atoms/TextareaInput';
import S from './PricingForm.styles';

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

const initialValues = {
  name: '',
  company: '',
  email: '',
  phoneNumber: '',
  projectDescription: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(5, 'To pole musi składać się z conajmniej 5 znaków')
    .required('To pole jest wymagane'),
  company: Yup.string()
    .min(3, 'To pole musi składać się z conajmniej 3 znaków')
    .required('To pole jest wymagane'),
  email: Yup.string()
    .email('To pole musi zawierać poprawny adres e-mail')
    .required('To pole jest wymagane'),
  phoneNumber: Yup.string().required('To pole jest wymagane'),
  projectDescription: Yup.string().min(
    10,
    'To pole musi składać się z conajmniej 10 znaków'
  ),
});

const PricingForm = ({ setSubmissionStatus }) => {
  const handleSubmission = async (values, actions) => {
    try {
      await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encode({ 'form-name': 'wycena', ...values }),
      });

      actions.resetForm();
      actions.setSubmitting(false);
      setSubmissionStatus('success');
    } catch (err) {
      setSubmissionStatus('error');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmission}
    >
      {() => (
        <Form
          name="wycena"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />

          <TextInput label="Imię i nazwisko" name="name" type="text" />
          <TextInput label="Firma" name="company" type="text" />
          <TextInput label="Adres e-mail" name="email" type="email" />
          <TextInput label="Numer telefonu" name="phoneNumber" type="text" />
          <TextareaInput
            label="Opis projektu"
            name="projectDescription"
            rows="8"
          />
          <S.ButtonWrapper>
            <Button type="submit" priority="primary">
              Wyślij zapytanie
            </Button>
          </S.ButtonWrapper>
        </Form>
      )}
    </Formik>
  );
};

PricingForm.propTypes = {
  setSubmissionStatus: PropTypes.func.isRequired,
};

export default PricingForm;
