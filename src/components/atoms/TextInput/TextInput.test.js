import React from 'react';
import { Formik, Form } from 'formik';
import { render, waitFor } from 'utils/test-utils';
import user from '@testing-library/user-event';
import TextInput from './TextInput';

describe('<TextInput />', () => {
  it('renders correctly with given props', async () => {
    const fakeInputValue = 'input value';
    const fakeProps = {
      label: 'label',
      name: 'name',
      type: 'text',
    };

    const { getByText, getByRole } = render(
      <Formik
        initialValues={{
          name: '',
        }}
      >
        {() => (
          <Form>
            <TextInput {...fakeProps} />
          </Form>
        )}
      </Formik>
    );

    const textInput = getByRole('textbox');
    const textInputLabel = getByText(fakeProps.label);

    expect(textInputLabel).toBeInTheDocument();
    expect(textInput).toHaveValue('');

    user.type(textInput, fakeInputValue);

    await waitFor(() => expect(textInput).toHaveValue(fakeInputValue));
  });
});
