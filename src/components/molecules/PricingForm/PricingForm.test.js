import React from 'react';
import { render } from 'utils/test-utils';
import user from '@testing-library/user-event';
import PricingForm from './PricingForm';

describe('<PricingForm />', () => {
  it('sets values of the inputs correctly', async () => {
    const fakeProps = {
      setSubmissionStatus: jest.fn(),
      setOffset: jest.fn(),
    };

    const fakeInputsValues = {
      name: 'Adam Smith',
      company: 'Corwin Group',
      email: 'adamsmith@mail.com',
      phoneNumber: '407-807-330',
    };

    const { getByLabelText } = render(<PricingForm {...fakeProps} />);

    const nameInput = getByLabelText(/imię/i);
    const companyInput = getByLabelText(/firma/i);
    const emailInput = getByLabelText(/e-mail/i);
    const phoneNumberInput = getByLabelText(/numer/i);

    expect(nameInput).toHaveValue('');
    expect(companyInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(phoneNumberInput).toHaveValue('');

    user.type(nameInput, fakeInputsValues.name);
    user.type(companyInput, fakeInputsValues.company);
    user.type(emailInput, fakeInputsValues.email);
    user.type(phoneNumberInput, fakeInputsValues.phoneNumber);

    expect(nameInput).toHaveValue(fakeInputsValues.name);
    expect(companyInput).toHaveValue(fakeInputsValues.company);
    expect(emailInput).toHaveValue(fakeInputsValues.email);
    expect(phoneNumberInput).toHaveValue(fakeInputsValues.phoneNumber);
  });
});
