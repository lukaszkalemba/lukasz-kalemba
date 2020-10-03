import React from 'react';
import { render } from 'utils/test-utils';
import user from '@testing-library/user-event';
import '__mocks__/intersectionObserver';
import Notification from './Notification';

const renderNotification = props => {
  const utils = render(<Notification {...props} />);

  return { ...utils };
};

describe('<Notification />', () => {
  it('closes notification on close button click', () => {
    const notificationProps = {
      submissionStatus: 'success',
      setSubmissionStatus: jest.fn(),
    };

    const { getByTestId } = renderNotification(notificationProps);

    const closeButton = getByTestId('close-notification-button');

    user.click(closeButton);

    expect(notificationProps.setSubmissionStatus).toHaveBeenCalledTimes(1);
  });

  it('has proper text content of heading if status is success', () => {
    const notificationProps = {
      submissionStatus: 'success',
      setSubmissionStatus: jest.fn(),
    };

    const { getByRole } = renderNotification(notificationProps);

    const heading = getByRole('heading');

    expect(heading).toHaveTextContent(/poszło/i);
  });

  it('has proper text content of heading if status is error', () => {
    const notificationProps = {
      submissionStatus: 'error',
      setSubmissionStatus: jest.fn(),
    };
    const { getByRole } = render(<Notification {...notificationProps} />);

    const heading = getByRole('heading');

    expect(heading).toHaveTextContent(/błąd/i);
  });
});
