import React from 'react';
import { render } from 'utils/test-utils';
import user from '@testing-library/user-event';
import * as Gatsby from 'gatsby';
import '__mocks__/intersectionObserver';
import PricingContent from './PricingContent';

beforeEach(() => {
  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

  useStaticQuery.mockImplementation(() => ({
    officeImage: {
      childImageSharp: {
        fluid: {
          aspectRatio: 0,
          src: '',
          srcSet: '',
          sizes: '',
        },
      },
    },
  }));
});

describe('<PricingContent />', () => {
  it('sets values of the inputs correctly', () => {
    const fakeInputsValues = {
      name: 'Adam Smith',
      company: 'Corwin Group',
      email: 'adamsmith@mail.com',
      phoneNumber: '407-807-330',
    };

    const { getByText, queryByTestId, getByLabelText } = render(
      <PricingContent />
    );

    const heading = getByText(/opowiedz/i);
    const notificationButton = queryByTestId('close-notification-button');

    const nameInput = getByLabelText(/imię/i);
    const companyInput = getByLabelText(/firma/i);
    const emailInput = getByLabelText(/e-mail/i);
    const phoneNumberInput = getByLabelText(/numer/i);

    expect(heading).toBeInTheDocument();
    expect(notificationButton).not.toBeInTheDocument();

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
