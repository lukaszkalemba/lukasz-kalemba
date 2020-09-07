import React from 'react';
import { Formik, Form } from 'formik';
import { render } from 'utils/test-utils';
import user from '@testing-library/user-event';
import TextInput from './TextInput';

describe('<TextInput />', () => {
  it('renders correctly', async () => {
    const fakeLabelText = 'text input label';
    const fakeInputValue = 'input value';

    const { getByTestId, getByRole } = render(
      <Formik
        initialValues={{
          name: '',
        }}
      >
        {() => (
          <Form>
            <TextInput label={fakeLabelText} name="name" type="text" />
          </Form>
        )}
      </Formik>
    );

    const textInput = getByRole('textbox');
    const textInputLabel = getByTestId('text-input-label');

    expect(textInputLabel.textContent).toBe(fakeLabelText);
    expect(textInput).toHaveValue('');

    await user.type(textInput, fakeInputValue);

    expect(textInput).toHaveValue(fakeInputValue);
  });
});
