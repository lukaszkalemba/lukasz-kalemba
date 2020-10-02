import React from 'react';
import { Formik, Form } from 'formik';
import { render, waitFor } from 'utils/test-utils';
import user from '@testing-library/user-event';
import TextInput from './TextInput';

const renderTextInput = props => {
  const utils = render(
    <Formik
      initialValues={{
        name: '',
      }}
    >
      {() => (
        <Form>
          <TextInput name="name" {...props} />
        </Form>
      )}
    </Formik>
  );

  const textInput = utils.getByRole('textbox');

  return { ...utils, textInput };
};

describe('<TextInput />', () => {
  it('renders with proper label', async () => {
    const textInputProps = {
      label: 'Name',
    };

    const { getByText } = renderTextInput(textInputProps);

    const TextInputLabel = getByText(textInputProps.label);

    expect(TextInputLabel.tagName).toBe('LABEL');
  });

  it('set proper value of the input', async () => {
    const { textInput } = renderTextInput({
      label: 'Name',
    });

    const textInputValue = 'Lorem ipsum dolor sit amet.';

    expect(textInput).toHaveValue('');
    user.type(textInput, textInputValue);
    await waitFor(() => expect(textInput).toHaveValue(textInputValue));
  });
});
