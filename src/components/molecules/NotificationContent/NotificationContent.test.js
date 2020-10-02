import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import NotificationContent from './NotificationContent';

const renderNotificationContent = props => {
  const utils = render(<NotificationContent {...props} />);

  return { ...utils };
};

describe('<NotificationContent />', () => {
  it('has proper h1 content if status is success', () => {
    const { getByRole } = renderNotificationContent({
      submissionStatus: 'success',
    });

    expect(getByRole('heading')).toHaveTextContent('Poszło!');
  });

  it('has proper h1 content if status is error', () => {
    const { getByRole } = renderNotificationContent({
      submissionStatus: 'error',
    });

    expect(getByRole('heading')).toHaveTextContent('Wystąpił błąd...');
  });
});
