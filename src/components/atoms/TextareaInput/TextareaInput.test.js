import React from 'react';
import { Formik, Form } from 'formik';
import { render, waitFor } from 'utils/test-utils';
import user from '@testing-library/user-event';
import TextareaInput from './TextareaInput';

describe('<TextareaInput />', () => {
  it('renders correctly', async () => {
    const fakeLabelText = 'textarea input label';
    const fakeInputValue = 'input value';

    const { getByTestId, getByRole } = render(
      <Formik
        initialValues={{
          name: '',
        }}
      >
        {() => (
          <Form>
            <TextareaInput label={fakeLabelText} name="name" rows="5" />
          </Form>
        )}
      </Formik>
    );

    const textareaInput = getByRole('textbox');
    const textareaInputLabel = getByTestId('textarea-label');

    expect(textareaInputLabel).toHaveTextContent(fakeLabelText);
    expect(textareaInput).toHaveValue('');

    user.type(textareaInput, fakeInputValue);

    await waitFor(() => expect(textareaInput).toHaveValue(fakeInputValue));
  });
});
