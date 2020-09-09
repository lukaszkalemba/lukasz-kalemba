import React from 'react';
import { Formik, Form } from 'formik';
import { render, waitFor } from 'utils/test-utils';
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

    expect(textInputLabel).toHaveTextContent(fakeLabelText);
    expect(textInput).toHaveValue('');

    user.type(textInput, fakeInputValue);

    await waitFor(() => expect(textInput).toHaveValue(fakeInputValue));
  });
});
