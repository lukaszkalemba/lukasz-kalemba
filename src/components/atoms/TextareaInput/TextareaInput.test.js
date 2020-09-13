import React from 'react';
import { Formik, Form } from 'formik';
import { render, waitFor } from 'utils/test-utils';
import user from '@testing-library/user-event';
import TextareaInput from './TextareaInput';

describe('<TextareaInput />', () => {
  it('renders correctly with given props', async () => {
    const fakeProps = {
      label: 'label',
      name: 'name',
      rows: '5',
    };
    const fakeInputValue = 'input value';

    const { getByText, getByRole } = render(
      <Formik
        initialValues={{
          name: '',
        }}
      >
        {() => (
          <Form>
            <TextareaInput {...fakeProps} />
          </Form>
        )}
      </Formik>
    );

    const textareaInput = getByRole('textbox');
    const textareaInputLabel = getByText(fakeProps.label);

    expect(textareaInputLabel).toBeInTheDocument();
    expect(textareaInput).toHaveValue('');

    user.type(textareaInput, fakeInputValue);

    await waitFor(() => expect(textareaInput).toHaveValue(fakeInputValue));
  });
});
