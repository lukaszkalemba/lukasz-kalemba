import React from 'react';
import { render } from 'utils/test-utils';
import user from '@testing-library/user-event';
import '__mocks__/intersectionObserver';
import Notification from './Notification';

window.smoothScroll = {
  updatePluginOptions: jest.fn(),
};

describe('<Notification />', () => {
  it('closes notification on icon click', () => {
    const fakeProps = {
      submissionStatus: 'success',
      setSubmissionStatus: jest.fn(),
      offset: { x: 0, y: 0 },
    };
    const { getByTestId } = render(<Notification {...fakeProps} />);

    const closeButton = getByTestId('close-notification-button');

    user.click(closeButton);

    expect(fakeProps.setSubmissionStatus).toHaveBeenCalledTimes(1);
  });

  it('renders correctly with success status', () => {
    const fakeProps = {
      submissionStatus: 'success',
      setSubmissionStatus: jest.fn(),
      offset: { x: 0, y: 0 },
    };
    const { getByRole } = render(<Notification {...fakeProps} />);

    const heading = getByRole('heading');

    expect(heading).toHaveTextContent(/poszło/i);
  });

  it('renders correctly with error status', () => {
    const fakeProps = {
      submissionStatus: 'error',
      setSubmissionStatus: jest.fn(),
      offset: { x: 0, y: 0 },
    };
    const { getByRole } = render(<Notification {...fakeProps} />);

    const heading = getByRole('heading');

    expect(heading).toHaveTextContent(/błąd/i);
  });
});
