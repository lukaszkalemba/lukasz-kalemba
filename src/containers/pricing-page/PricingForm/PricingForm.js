import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Container from 'components/common/Container';
import Button from 'components/common/Button';
import TextInput from 'components/pricing-page/TextInput';
import TextareaInput from 'components/pricing-page/TextareaInput';
import PricingImage from 'components/pricing-page/PricingImage';
import S from './PricingForm.styles';

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

const handleSubmit = (values, { resetForm }) => {
  /* eslint-disable no-alert */
  window.alert(JSON.stringify(values, null, 2));

  resetForm();
};

const PricingForm = () => {
  return (
    <Container axis="both">
      <Container axis="x">
        <S.Wrapper>
          <div>
            <S.Heading>Opowiedz nam o swoim pomyśle.</S.Heading>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form>
                  <TextInput label="Imię i nazwisko" name="name" type="text" />
                  <TextInput label="Firma" name="company" type="text" />
                  <TextInput label="Adres e-mail" name="email" type="email" />
                  <TextInput
                    label="Numer telefonu"
                    name="phoneNumber"
                    type="text"
                  />
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
          </div>

          <PricingImage />
        </S.Wrapper>
      </Container>
    </Container>
  );
};

export default PricingForm;
