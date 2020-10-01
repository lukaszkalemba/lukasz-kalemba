import React from 'react';
import { render } from 'utils/test-utils';
import '__mocks__/intersectionObserver';
import NotificationContent from './NotificationContent';

describe('<NotificationContent />', () => {
  it('renders correctly with success status', () => {
    const fakeProps = {
      submissionStatus: 'success',
    };

    const { getByRole } = render(<NotificationContent {...fakeProps} />);

    const heading = getByRole('heading');

    expect(heading).toHaveTextContent('Poszło!');
  });

  it('renders correctly with error status', () => {
    const fakeProps = {
      submissionStatus: 'error',
      enableScrolling: jest.fn(),
    };

    const { getByRole } = render(<NotificationContent {...fakeProps} />);

    const heading = getByRole('heading');

    expect(heading).toHaveTextContent('Wystąpił błąd...');
  });
});
