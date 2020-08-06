import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import S from './Notification.styles';

const Notification = ({ submissionStatus, setSubmissionStatus }) => {
  let textContent = {};

  switch (submissionStatus) {
    case 'success':
      textContent = {
        heading: 'Poszło!',
        paragraph: 'Odezwiemy się do Ciebie w ciągu 24h.',
      };
      break;

    case 'error':
      textContent = {
        heading: 'Coś poszło nie tak...',
        paragraph: 'Spróbuj ponownie później',
      };
      break;

    default:
      textContent = {
        heading: '',
        paragraph: '',
      };
      break;
  }

  const closeNotification = () => setSubmissionStatus(null);

  return (
    <S.Wrapper>
      <Heading>{textContent.heading}</Heading>
      <p>{textContent.paragraph}</p>
      <Button priority="secondary" path="/">
        Powrót do strony głównej
      </Button>

      <button onClick={closeNotification} type="button">
        x
      </button>
    </S.Wrapper>
  );
};

Notification.propTypes = {
  submissionStatus: PropTypes.oneOf(['success', 'error', null]).isRequired,
  setSubmissionStatus: PropTypes.func.isRequired,
};

export default Notification;
