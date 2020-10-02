import React from 'react';
import { render } from 'utils/test-utils';
import user from '@testing-library/user-event';
import PricingForm from './PricingForm';

describe('<PricingForm />', () => {
  it('sets values of the inputs properly', async () => {
    const pricingFormProps = {
      setSubmissionStatus: jest.fn(),
    };

    const InputsValues = {
      name: 'Adam Smith',
      company: 'Corwin Group',
      email: 'adamsmith@mail.com',
      phoneNumber: '407-807-330',
    };

    const { getByLabelText } = render(<PricingForm {...pricingFormProps} />);

    const nameInput = getByLabelText(/imię/i);
    const companyInput = getByLabelText(/firma/i);
    const emailInput = getByLabelText(/e-mail/i);
    const phoneNumberInput = getByLabelText(/numer/i);

    expect(nameInput).toHaveValue('');
    expect(companyInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(phoneNumberInput).toHaveValue('');

    user.type(nameInput, InputsValues.name);
    user.type(companyInput, InputsValues.company);
    user.type(emailInput, InputsValues.email);
    user.type(phoneNumberInput, InputsValues.phoneNumber);

    expect(nameInput).toHaveValue(InputsValues.name);
    expect(companyInput).toHaveValue(InputsValues.company);
    expect(emailInput).toHaveValue(InputsValues.email);
    expect(phoneNumberInput).toHaveValue(InputsValues.phoneNumber);
  });
});
