import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from 'components/atoms/Button';
import TextInput from 'components/atoms/TextInput';
import TextareaInput from 'components/atoms/TextareaInput';
import { encodeFormValues } from 'helpers/encodeFormValues';
import { disableScrolling } from 'helpers/disableScrolling';
import S from './PricingForm.styles';
import animations from './PricingForm.animations';

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
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };

      const body = encodeFormValues({ 'form-name': 'wycena', ...values });

      await axios.post('/', body, config);

      actions.resetForm();
      actions.setSubmitting(false);

      disableScrolling();
      setSubmissionStatus('success');
    } catch (err) {
      disableScrolling();
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

          <S.Wrapper {...animations.inputsWrapper}>
            <TextInput
              label="Imię i nazwisko"
              name="name"
              type="text"
              animation={animations.input}
            />
            <TextInput
              label="Firma"
              name="company"
              type="text"
              animation={animations.input}
            />
            <TextInput
              label="Adres e-mail"
              name="email"
              type="email"
              animation={animations.input}
            />
            <TextInput
              label="Numer telefonu"
              name="phoneNumber"
              type="text"
              animation={animations.input}
            />
            <TextareaInput
              label="Opis projektu"
              name="projectDescription"
              rows="8"
              animation={animations.input}
            />
            <S.ButtonWrapper {...animations.input}>
              <Button type="submit" priority="primary">
                Wyślij zapytanie
              </Button>
            </S.ButtonWrapper>
          </S.Wrapper>
        </Form>
      )}
    </Formik>
  );
};

PricingForm.propTypes = {
  setSubmissionStatus: PropTypes.func.isRequired,
};

export default PricingForm;
