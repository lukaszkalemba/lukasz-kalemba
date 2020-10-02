import React from 'react';
import { Formik, Form } from 'formik';
import { render, waitFor } from 'utils/test-utils';
import user from '@testing-library/user-event';
import TextareaInput from './TextareaInput';

const renderTextarea = props => {
  const utils = render(
    <Formik
      initialValues={{
        name: '',
      }}
    >
      {() => (
        <Form>
          <TextareaInput name="project-description" rows="5" {...props} />
        </Form>
      )}
    </Formik>
  );

  const textarea = utils.getByRole('textbox');

  return { ...utils, textarea };
};

describe('<TextareaInput />', () => {
  it('renders with proper label', async () => {
    const textareaProps = {
      label: 'Project Description',
    };

    const { getByText } = renderTextarea(textareaProps);

    const textareaInputLabel = getByText(textareaProps.label);

    expect(textareaInputLabel.tagName).toBe('LABEL');
  });

  it('set proper value of the input', async () => {
    const { textarea } = renderTextarea({
      label: 'Project Description',
    });

    const textareaValue = 'Lorem ipsum dolor sit amet.';

    expect(textarea).toHaveValue('');
    user.type(textarea, textareaValue);
    await waitFor(() => expect(textarea).toHaveValue(textareaValue));
  });
});
