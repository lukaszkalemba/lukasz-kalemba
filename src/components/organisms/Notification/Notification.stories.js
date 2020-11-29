import React from 'react';
import Notification from './Notification';

export default {
  title: 'Organisms/Notification',
  component: Notification,
};

const Template = args => <Notification {...args} />;

export const Success = Template.bind({});
Success.args = {
  submissionStatus: 'success',
  setSubmissionStatus: () => {},
};

export const Error = Template.bind({});
Error.args = {
  submissionStatus: 'error',
  setSubmissionStatus: () => {},
};
